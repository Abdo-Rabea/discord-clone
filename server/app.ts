import express from "express";
const app = express();

app.use(express.json());

// app.get("/health", async (_req, res) => {
//   try {
//     await pool.query("SELECT 1");
//     res.json({ status: "ok" });
//   } catch (error) {
//     console.error("Health check failed", error);
//     res.status(500).json({ status: "error" });
//   }
// });

// async function startServer() {
//   try {
//     await pool.query("SELECT 1");
//     console.log("Database connected");
//   } catch (error) {
//     console.error("Database connection failed", error);
//     process.exit(1);
//   }

//   app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
//   });
// }

// startServer();

export default app;
