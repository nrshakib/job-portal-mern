import mongoose from "mongoose";
import validator from "validator";

// Create schema model for user
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
    minLength: [3, "Name must be of minimum 3 letters"],
    maxLength: [30, "Name can be of maximum 30 letters"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  phone: {
    type: Number,
    required: [true, "Please provide your phone number"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minLength: [8, "Pasword must contain at least 8 characters..!"],
    maxLength: [30, "Pasword can contain maximum 32 characters..!"],
  },
  role: {
    type: String,
    required: [true, "Please provide your role"],
    enum: ["JOB Seeker", "Employer"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//Hashing Pasword
