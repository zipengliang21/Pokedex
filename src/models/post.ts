import mongoose from "mongoose";

import db from "../mongodb.config";

const instance = db.instance;

export interface IPost {
    userId: string;
    userName: string;
    postID: string;
    title: string;
    description: string;
    content: string;
    avatar?: string;
    date: Date;

}

export type PostDocument = mongoose.Document & IPost;

const postSchema = new instance.Schema({
    userId: {type: String, required: true},
    userName: {type: String, required: true},
    postID: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    content: {type: String, required: true},
    avatar: {type:String, default: "http://3.bp.blogspot.com/-fZ-FTGBT_OI/V87me3nL3PI/AAAAAAAAAkQ/" +
            "ornK37y9NRgbYhQB1sjANbXUX2HxrISbgCK4B/s1600/068_Machamp.png"},
    date: { type: Date, required: true},
}, { collection: "posts"})

export const Posts = instance.model<any>('Posts', postSchema);