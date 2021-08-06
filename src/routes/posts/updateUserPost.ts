import { Request, Response } from 'express';
import {Posts} from "../../models/post";

export default async (req: Request, res: Response): Promise<void> => {
    const userId = req.params._id;
    const userName = req.body.userName;
    const avatar = req.body.avatar;
    try {
        let postExists: boolean;
        postExists = await Posts.exists({userId: userId});
        if (postExists) {
            const update = {
                userName: userName,
                avatar: avatar,
            }

            await Posts.updateMany(
                {userId:userId},
                update,
                {new: true}
            );
            res.status(200).json({  update });
        }

    }catch (err) {
            res.status(500).send("Unexpected error.");
    }

};