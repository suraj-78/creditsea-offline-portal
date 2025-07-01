import mongoose from "mongoose";
import app from "./app";

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URI || "";

// async function connectToDatabase() {
//   await mongoose.connect(MONGO_URI);
//   console.log("MongoDB connected");
// }

// connectToDatabase();


mongoose.connect(MONGO_URL)
  .then(() => {
    console.log("Mongodb connected");
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
