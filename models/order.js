import { Schema, model, mongoose } from "mongoose";
const orderSchema = new Schema({
  orderType: {
    type: String,
    enum: ["package", "tour", "ticket"],
    required: true,
  },
  objectService: {
    type: mongoose.Types.ObjectId,
    required: true,
    refPath: "orderType",
  },
  fullName: {
    type: String,
    required: true,
  },
  tourName: {
    type: String,
    required: true,
  },
  tourDate: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  totalPersons: {
    type: Number,
    required: true,
  },
  pickupTime: {
    type: String,
    required: true,
  },
  pickupLocation: {
    type: String,
    required: true,
  },
  stripeSessionId: {
    type: String,
    required: true,
  },
  payment: {
    type: Number,
    required: true,
  },
});

export const Order = model("order", orderSchema);
