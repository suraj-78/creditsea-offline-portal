import express from "express"; 
const analyticsRouter = express.Router();


const analyticsController = require("../controllers/analyticsController");

analyticsRouter.get("/analytics", analyticsController.getAnalytics);
analyticsRouter.get("/analytics/summary", analyticsController.getAnalyticsSummary);

module.exports = analyticsRouter;
