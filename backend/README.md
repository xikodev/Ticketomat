# Ticketomat backend

TypeScript backend using Node's built-in HTTP server.

## Run

From `backend/`, run `npm run build`, then `npm start`.
Install existing development dependencies with `npm ci` if needed.

The server defaults to `0.0.0.0:3000`. Override the address with `HOST`
and the port with `PORT` environment variables.

## Structure

```text
src/
    index.ts         # HTTP server startup
    config.ts        # Environment configuration
    app.ts           # Routing and fallback responses
    routes/
        health.ts      # Health endpoint
```

See [API.md](API.md) for endpoint documentation.
