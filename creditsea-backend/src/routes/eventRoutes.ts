import express from "express"; 
const eventRouter = express.Router();

const eventController = require("../controllers/eventController");

eventRouter.post("/events", eventController.logEvents);  // it wil call the logEvent function

module.exports = eventRouter;
