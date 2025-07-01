import { Request, Response } from "express";
import Event from "../models/event";

const getAnalytics = async (req: Request, res: Response) => {
  try {
    const { userId, page, type, startDate, endDate } = req.query;

    const filter: any = {};

    if (userId) {
      filter.userId = userId;
    }

    if (page) {
      filter.page = page;
    }

    if (type) {
      filter.type = type;
    }

    if (startDate && endDate) {
      filter.timestamp = {
        $gte: new Date(startDate as string),
        $lte: new Date(endDate as string),
      };
    }

    const events = await Event.find(filter);
    res.json(events);
  } catch (err) {
    console.log("Error getting analytics:", err);
    res.status(500).json({ message: "Server error" });
  }
};

const getAnalyticsSummary = async (req: Request, res: Response) => {
  try {
    // Group events by type and count them
    const summary = await Event.aggregate([
      {
        $group: {
          _id: "$type",
          count: { $sum: 1 }
        }
      }
    ]);

    res.json(summary);
  } catch (err) {
    console.log("Error in summary:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export { getAnalytics, getAnalyticsSummary };
