import { model, models, Schema } from "mongoose";

const User = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["writer", "reader"]
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: "Post"
    }]
})

export default models.User || model("User", User)