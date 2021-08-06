import { Request, Response } from 'express';
import {Comments} from "../../models/comment";

export default async (req: Request, res: Response): Promise<void> => {
        const userId = req.params._id;
        const userName = req.body.userName;
        const avatar = req.body.avatar;

        try {
            let commentExists: boolean;
            commentExists = await Comments.exists({userId: userId});

            if (commentExists) {
                const update = {
                    userName: userName,
                    avatar: avatar
                }

                const updated = await Comments.updateMany(
                    {userId:userId},
                    update,
                    {new: true, runValidators: true, useFindAndModify:false}
                );

                res.status(200).json({  update });
            }

        }catch (err) {
            res.status(500).send("Unexpected error.");
        }

    }