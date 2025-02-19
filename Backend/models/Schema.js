import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const userSchema =new Schema({
    bookingId: { type: Schema.Types.ObjectId, required: true, unique: true }, // Unique booking ID
    taskDescription: { type: String, required: true },
    taskScope: { type: String, required: true },
    address: { type: String, required: true },
    dateAndTime: { type: Date, default: Date.now }, // Default to current date
    additionalNotes: { type: String, default: '' } 
});
 const userModel = mongoose.model('Bookings', userSchema);
export default userModel;
