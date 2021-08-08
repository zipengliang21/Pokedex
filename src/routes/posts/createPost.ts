import { Request, Response } from 'express';
import {Posts, PostDocument,IPost} from "../../models/post";
import {ServerError} from "../../util/util";

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

    try{
        if(!userId){
            throw new ServerError({
                message: "The user id does not exist",
                statusCode: 400,
            });
        }
        if(!userName){
            throw new ServerError({
                message: "The user name does not exist",
                statusCode: 400,
            });
        }
        if(!postID){
            throw new ServerError({
                message: "The post id does not exist",
                statusCode: 400,
            });
        }
        if(!title){
            throw new ServerError({
                message: "The title does not exist",
                statusCode: 400,
            });
        }
        if(!description){
            throw new ServerError({
                message: "The description does not exist",
                statusCode: 400,
            });
        }
        if(!content){
            throw new ServerError({
                message: "The contnet does not exist",
                statusCode: 400,
            });
        }
        if(!date){
            throw new ServerError({
                message: "The date does not exist",
                statusCode: 400,
            });
        }
        const newPost: PostDocument = await new Posts(postInfo).save();
        const savedPost: PostDocument = await Posts.findById(
            newPost._id
        )
        res.status(201).json({ savedPost: savedPost });

    }catch(err){
        if (err instanceof ServerError) {
            res.status(err.statusCode).send(err.message);
        } else {
            res.status(500).send("Unexpected error.");
        }
    }
};