# CI/CD pipeline

This repo uses GitHub Actions for CI and a self-hosted GitHub Actions runner on the Raspberry Pi for CD.

## CI: build check

Runs on:

- every pull request into `main`
- every push to `main`
- every push to `revamp-modern-cv-site`

Steps:

1. Check out the repo
2. Install Bun
3. Install dependencies with `bun install --frozen-lockfile`
4. Build the production bundle with `bun run build`
5. Save the generated `public/` folder as a workflow artifact

If the build fails, deployment does not run.

## CD: Raspberry Pi deploy

Runs only when code is pushed to `main` and the build job succeeds.

The deploy job targets a GitHub Actions self-hosted runner with these labels:

```text
self-hosted
linux
ARM64
```

The deploy job runs:

```sh
scripts/deploy-pi.sh
```

That script:

1. Fetches latest `main` from GitHub
2. Checks out `main` in the Raspberry Pi app directory
3. Resets the local checkout to `origin/main`
4. Installs dependencies with `bun install --frozen-lockfile`
5. Builds the site with `bun run build`
6. Restarts `personal-site.service`

## Raspberry Pi app location

Default app directory:

```text
/var/lib/openclaw/.openclaw/agents/personal-dev/workspace/repos/personal-site
```

Default service:

```text
personal-site.service
```

Both can be overridden with environment variables:

```sh
APP_DIR=/path/to/site SERVICE_NAME=personal-site.service scripts/deploy-pi.sh
```

## Why use a self-hosted runner?

The site is hosted on the Raspberry Pi, so deployment should happen from the Pi itself. This avoids exposing SSH to the public internet and keeps the deploy path simple while learning CI/CD.
