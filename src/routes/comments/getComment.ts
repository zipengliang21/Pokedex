import {Request, Response} from "express";
import {Comments, CommentDocument} from "../../models/comment";

export default async (req: Request, res: Response): Promise<void> => {
    const _id = req.params._id;
    const comment: CommentDocument[] = await Comments.find({_id});

    res.status(200).json({comment});
};