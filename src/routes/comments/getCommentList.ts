import { Request, Response } from 'express';
import {Comments, CommentDocument} from "../../models/comment";


export default async (req: Request, res: Response): Promise<void> => {
    const commentList: CommentDocument[] = await Comments.find({});

    res.status(200).json({commentList: commentList, count: commentList.length });
};