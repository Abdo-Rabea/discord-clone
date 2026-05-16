import "dotenv/config";
import { db } from "./utils/prismaClient";
import app from "./app";

process.on("uncaughtException", (err) => {
  console.log("Exception💥: ", err.name, "-", err.message, err);
  process.exit(1); // you should always exit the process
});

// Database connection
db.$connect()
  .then(() => {
    console.log("Prisma connected");
  })
  .catch((err) => {
    console.error("Error connecting to Prisma", err);
    process.exit(1);
  });

// server setup
const port: number = Number(process.env.PORT) || 3000;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
server.on("error", (err) => {
  console.error("Server error", err);
  process.exit(1);
});

process.on("unhandledRejection", (err: NodeJS.ErrnoException) => {
  console.log("Exception💥: ", err.name, "-", err.message);
  server.close(() => {
    db.$disconnect()
      .catch(() => null)
      .finally(() => process.exit(1));
  });
});
