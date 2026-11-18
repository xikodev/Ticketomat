# Backend API

Default local base URL: `http://localhost:3000`.

## GET /health

Returns HTTP `200` with `Content-Type: application/json`:

```json
{ "status": "ok" }
```

This checks that the HTTP server responds; it does not check external services.
No authentication or request body is required. Responses are not cached.

```bash
curl http://localhost:3000/health
```

Other methods on `/health` return `405` with `Allow: GET`.
Unknown paths return `404`. Both errors use JSON with an `error` message.
