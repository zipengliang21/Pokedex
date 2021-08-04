import { Request, Response } from 'express';
import {Posts} from "../../models/post";
import { ServerError } from '../../util/util';

export default async (req: Request, res: Response): Promise<void> => {
    const _id = req.body._id;
    try {
        if (_id ===''|| _id === undefined) {
            throw new ServerError({
                message: "not get such post id",
                statusCode: 400,
            });
        }

        let postExists: boolean;
        postExists = await Posts.exists({_id: _id});

        if (!postExists) {
            throw new ServerError({
                statusCode: 400,
                message: "no such post",
            });
        }

        await Posts.deleteOne({_id: _id});
        res.sendStatus(204);

    }catch (err) {
        if (err instanceof ServerError) {
            res.status(err.statusCode).send(err.message);
        } else {
            res.status(500).send("Unexpected error.");
        }
    }
};