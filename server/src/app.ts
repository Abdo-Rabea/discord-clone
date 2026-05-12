import express from "express";
import { prisma } from "./utils/prismaClient";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  prisma.test
    .findMany()
    .then((tests) => {
      res.json({ data: "hello" });
    })
    .catch((err) => {
      console.error("Error fetching tests", err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

export default app;
