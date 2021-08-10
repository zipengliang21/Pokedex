import {Request, Response} from "express";
import bcrypt from "bcrypt";
import {Profile} from "../../models/profile";
import {ServerError} from "../../util/util";

export default async (req: Request, res: Response): Promise<void> => {
    const email: string = req.body.email;
    const userName: string = req.body.userName;
    const description: string = req.body.description ? req.body.description : "no description";
    const location: string = req.body.location ? req.body.location : "";
    const _id = req.body.userId;
    let password;

    try {
        if (!_id) {
            throw new ServerError({
                message: "The profile id does not exist",
                statusCode: 400,
            });
        }
        if (req.body.password === null || req.body.password === undefined || req.body.password === "") {
            const user = await Profile.findOne({_id: _id});
            password = user.password;
        } else {
            password = await bcrypt.hash(req.body.password, 8);
        }

        const condition = {_id: _id};

        const query = {
            "email": email,
            "userName": userName,
            "description": description,
            "password": password,
            "location": location
        };

        await Profile.findOneAndUpdate(condition, query, {new: true}, function (err, doc) {
            if (err) return res.send(500);
            return res.send("promise done");
        });
    } catch (err) {
        if (err instanceof ServerError) {
            res.status(err.statusCode).send(err.message);
        } else {
            res.status(500).send("Unexpected error.");
        }
    }
};