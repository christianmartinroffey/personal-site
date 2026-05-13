#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${APP_DIR:-/var/lib/openclaw/.openclaw/agents/personal-dev/workspace/repos/personal-site}"
BRANCH="${DEPLOY_BRANCH:-main}"
SERVICE_NAME="${SERVICE_NAME:-personal-site.service}"
LOCK_FILE="${LOCK_FILE:-/tmp/personal-site-deploy.lock}"

log() {
  printf '[deploy] %s\n' "$*"
}

exec 9>"$LOCK_FILE"
if ! flock -n 9; then
  log "Another deploy is already running."
  exit 1
fi

cd "$APP_DIR"

log "Fetching latest $BRANCH from origin"
git fetch origin "$BRANCH"

log "Checking out $BRANCH"
git checkout "$BRANCH"

log "Resetting local checkout to origin/$BRANCH"
git reset --hard "origin/$BRANCH"

log "Installing Node dependencies"
npm ci

log "Building production bundle"
npm run build

log "Restarting $SERVICE_NAME"
if systemctl --user restart "$SERVICE_NAME"; then
  log "Restarted via systemd user service"
else
  log "systemctl --user is unavailable; restarting local Python server directly"

  PID_FILE="$APP_DIR/.portfolio.pid"
  LOG_FILE="$APP_DIR/.portfolio.log"
  PORT="${PORT:-8080}"

  if [[ -f "$PID_FILE" ]] && kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then
    kill "$(cat "$PID_FILE")"
  fi

  pkill -f "$APP_DIR/serve_static.py" 2>/dev/null || true

  env -u RUNNER_TRACKING_ID PORT="$PORT" nohup /usr/bin/python3 "$APP_DIR/serve_static.py" >> "$LOG_FILE" 2>&1 &
  echo $! > "$PID_FILE"
fi

log "Deployment complete: $(git rev-parse --short HEAD)"
