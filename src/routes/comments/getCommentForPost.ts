import { Request, Response } from 'express';
import {Comments, CommentDocument} from "../../models/comment";

export default async (req: Request, res: Response): Promise<void> => {
    const postId  = req.params.postID;
    const comment: CommentDocument[] = await Comments.find({postID:postId});

    res.status(200).json({ comment });
};