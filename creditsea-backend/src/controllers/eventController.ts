import { Request, Response } from "express";
import Event from "../models/event";
 // use require instead of import
// If you're using TypeScript with ES modules, we can keep using import, but for learning:
// const Event = require("../models/Event"); is beginner-style in JS/TS

// const app = express();


// this function saves events sent from frontend
const logEvents = async (req: Request, res: Response) => {
  try {
    const dataFromFrontend = req.body;

    if (!Array.isArray(dataFromFrontend)) {
      return res.status(400).json({ message: "Please send events in an array" });
    }

    // Save all events in MongoDB
    await Event.insertMany(dataFromFrontend);

    res.status(201).json({ message: "Events saved into database" });
  } catch (err) {
    console.log("Something went wrong while saving events");
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { logEvents };
