const { Pool } = require("pg");
require("dotenv/config");
import app from "./app";

process.on("uncaughtException", (err) => {
  console.log("Exception💥: ", err.name, "-", err.message, err);
  process.exit(1); // you should always exit the process
});

// Database connection
console.log(process.env.DATABASE_URL);
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  console.error("DATABASE_URL is not set");
  process.exit(1);
}
const pool = new Pool({ connectionString: databaseUrl });

// Start the server
const port: number = Number(process.env.PORT) || 3000;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

process.on("unhandledRejection", (err: NodeJS.ErrnoException) => {
  console.log("Exception💥: ", err.name, "-", err.message);
  server.close(() => {
    process.exit(1);
  });
});
