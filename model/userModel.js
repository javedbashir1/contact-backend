import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: { type: String},
    email: { type: String },
    phone_number: { type: String},
    date_of_birth: { type: Date},
    designation: { type: String } 
});

const User = mongoose.model("User", userSchema);

export default User;