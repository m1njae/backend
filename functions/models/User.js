import mongoose from "mongoose";

const UserSchmea = new mongoose.Schema({
    token: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export default mongoose.model<mongoose.Document>("User", UserSchmea);
