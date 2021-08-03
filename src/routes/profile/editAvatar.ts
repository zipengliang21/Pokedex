import { Request, Response } from 'express';
import {Profile, ProfileDocument} from "../../models/profile";

export default async (req: Request, res: Response): Promise<void> => {
    const avatar:string = req.body.avatar;
    const _id  = req.body.userId;

    const condition = {_id};

    const query = {'avatar':avatar};

    Profile.findOneAndUpdate(condition, query, {upsert: true}, function(err, doc) {
        if (err) return res.send(500);
        return res.send("promise done");
    });

};