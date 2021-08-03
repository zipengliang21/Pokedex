import { Request, Response } from 'express';
import {Posts, PostDocument,IPost} from "../../models/post";

export default async (req: Request, res: Response): Promise<void> => {
    const title: string = req.body.title ? req.body.title : 'Untitled Post';
    const userId: string = req.body.userId;
    const description: string = req.body.description
        ? req.body.description
        : 'This is a forum post.';
    const content: string = req.body.content ? req.body.content : 'No content yet.';
    const userName:string = req.body.userName;
    const postID:string = req.body.postID;
    const avatar:string = req.body.avatar;
    const date:Date = req.body.date;

    const postInfo: IPost ={
        userId,
        userName,
        postID,
        title,
        description,
        content,
        avatar,
        date,
    };
    const newPost: PostDocument = await new Posts(postInfo).save();
    const savedPost: PostDocument = await Posts.findById(
        newPost._id
    )
    res.status(201).json({ savedPost: savedPost });
};