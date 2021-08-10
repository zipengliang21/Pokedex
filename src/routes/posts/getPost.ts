import {Request, Response} from "express";
import {Posts, PostDocument} from "../../models/post";

export default async (req: Request, res: Response): Promise<void> => {
    const _id = req.params._id;
    const post: PostDocument[] = await Posts.find({_id});

    res.status(200).json({post});
};
