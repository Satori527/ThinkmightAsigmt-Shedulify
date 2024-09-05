import { Schema } from "mongoose";

const eventSchema = new Schema({
        email: String,
        uri: String,
        title: String,
        description: String,
        length: Number,
        bookingTimes: {start:Date, end:Date},
        attendees: [{
            type: Schema.Types.ObjectId,
            ref: "User"
        }],
    },
    { timestamps: true, }
);

export const Event = mongoose.model("Event", eventSchema)