import { createServer } from "node:http";
import { app } from "./app.js";
import { config } from "./config.js";

const server = createServer(app);

server.on("error", (error) => {
  console.error("Server failed:", error);
  process.exitCode = 1;
});

server.listen(config.port, config.host, () => {
  console.log(`Backend listening on http://${config.host}:${config.port}`);
});
