#!/usr/bin/env python3
"""Serve the built portfolio from ./public with SPA fallback."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import os

ROOT = Path(__file__).resolve().parent / "public"
PORT = int(os.environ.get("PORT", "8080"))


class PortfolioHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def do_GET(self):
        requested = ROOT / self.path.lstrip("/").split("?", 1)[0]
        if not requested.exists() and "." not in Path(self.path).name:
            self.path = "/index.html"
        super().do_GET()


if __name__ == "__main__":
    server = ThreadingHTTPServer(("0.0.0.0", PORT), PortfolioHandler)
    print(f"Serving portfolio from {ROOT} on http://0.0.0.0:{PORT}", flush=True)
    server.serve_forever()
