import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        avatar: {
            type: String,
            //required: true
        },
        availability: {
            type: Schema.Types.ObjectId,
            ref: BookingSchema,
            required: true
        }
    }
)

const fromToSchema = new mongoose.Schema({
    from: String,
    to: String,
    active: Boolean,
    });

const availability = new Schema({
    monday: fromToSchema,
    tuesday: fromToSchema,
    wednesday: fromToSchema,
    thursday: fromToSchema,
    friday: fromToSchema,
    saturday: fromToSchema,
    sunday: fromToSchema,
});

export const User = mongoose.model("User", userSchema)

export const Availability = mongoose.model("Availability", availability)
/*
"user": "user@gmail.com",

    "start": {

        "$date": "2024-08-30T03:30:00.000Z"

    },

    "end": {

        "$date": "2024-08-30T07:00:00.000Z"

    },

    "duration": 30,

    "scheduledSlots": [

    ]

}
*/

/*
{

    "user": "user@gmail.com",

    "start": {

        "$date": "2024-08-30T03:30:00.000Z"

    },

    "end": {

        "$date": "2024-08-30T04:00:00.000Z"

    },

    "duration": 30,

    "scheduledSlots": [

        {

            "start": {

                "$date": "2024-08-30T03:30:00.000Z"

            },

            "end": {

                "$date": "2024-08-30T04:00:00.000Z"

            },

            "attendees": [

{

            "name": "siri",

            "email": "siri@myparticipants.com",

                        }

]

        }

    ]

}

*/