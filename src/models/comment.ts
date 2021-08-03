import mongoose from "mongoose";

import db from "../mongodb.config";

const instance = db.instance;

export interface IComment {
    userId: string;
    userName: string;
    postID: string;
    commentID: string;
    content: string;
    avatar?: string;
    date: Date;
}

export type CommentDocument = mongoose.Document & IComment;

const commentSchema = new instance.Schema({
    userId: {type: String, required: true},
    userName: {type: String, required: true},
    postID: {type: String, required: true},
    commentID: {type: String, required: true},
    content: {type: String, required: true},
    avatar: {type:String, default: "http://3.bp.blogspot.com/-fZ-FTGBT_OI/V87me3nL3PI/AAAAAAAAAkQ/" +
            "ornK37y9NRgbYhQB1sjANbXUX2HxrISbgCK4B/s1600/068_Machamp.png"},
    date: { type: Date, required: true},

}, { collection: "comments"})

export const Comments = instance.model<any>('Comments', commentSchema);