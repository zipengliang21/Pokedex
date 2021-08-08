import { Request, Response } from 'express';
import {Profile, ProfileDocument} from "../../models/profile";
import {ServerError} from "../../util/util";

export default async (req: Request, res: Response): Promise<void> => {
    const avatar:string = req.body.avatar;
    const _id  = req.body.userId;

    try{
        if(!_id){
            throw new ServerError({
                message: "The profile id does not exist",
                statusCode: 400,
            });
        }
        const condition = {_id};

        const query = {'avatar':avatar};

        Profile.findOneAndUpdate(condition, query, {upsert: true}, function(err, doc) {
            if (err) return res.send(500);
            return res.send("promise done");
        });
    }catch(err){
        if (err instanceof ServerError) {
            res.status(err.statusCode).send(err.message);
        } else {
            res.status(500).send("Unexpected error.");
        }
    }

};