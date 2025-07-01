import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const analyticsRoutes = require("./routes/analyticsRoutes");
const eventRoutes = require("./routes/eventRoutes"); 
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());  // it will parse the data into json from the frontend

app.use("/api", eventRoutes);

app.get("/", (req, res) => {
  res.send("CreditSea Backend is running!");
});

app.use("/api", analyticsRoutes);


export default app;
