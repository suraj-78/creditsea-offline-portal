import mongoose from "mongoose";
import { Document } from "mongoose";



export interface IEvent extends Document {  // inherits the mongoose 
  type: string;          // it can be  click, page_view, form_submit
  page: string;         
  timestamp: Date;      
  userId: string;       
  sessionId: string;   
  details: any;          
}

const EventSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  page: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  sessionId: {
    type: String,
    required: true,
  },
  details: {
    type: Object,
    default: {},
  },
});


const Event = mongoose.model<IEvent>("Event", EventSchema); // in db event will be created 

export default Event;
