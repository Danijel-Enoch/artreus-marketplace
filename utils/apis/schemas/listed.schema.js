import { Schema } from "mongoose";

const listedSchema = new Schema(
    {
        metaUri: {
            type: String,
            required: true,
        },
        imageUri: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        listed: {
            default:false,
            type: Boolean,
            required: false,
        },
        tokenId:{
            type: Number,
            required: true,
            unique:true
        }
    },
);

export default listedSchema;