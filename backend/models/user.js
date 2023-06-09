import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, minlength: 3, maxlength: 30 },
    email: {
      name: String,
      type: String,
      required: true,
      minlength: 3,
      maxlength: 200,
      unique: true,
    },
    password: { type: String, minlength: 3, maxlength: 1024 },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
