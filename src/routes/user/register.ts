import { Request, Response } from 'express';
import {ServerError} from "../../util/util";
import {IUser, User, UserDocument} from "../../models/user";
import {sendToken} from "../../middleware/auth";
import validator from "validator";

export default async (req: Request, res: Response): Promise<void> => {
    const {
        email,
        userName,
        password,
        confirmPassword
    } = req.body;
    let userExist: IUser;
    try {
        if (!email) {
            throw new ServerError({
                message: "Please provide your email address.",
                statusCode: 400,
            });
        }

        if (!userName) {
            throw new ServerError({
                message: "Please provide your user name.",
                statusCode: 400,
            });
        }

        if (!password) {
            throw new ServerError({
                message: "Please provide your password.",
                statusCode: 400,
            });
        }

        if (!password) {
            throw new ServerError({
                message: "Please provide your confirmed password.",
                statusCode: 400,
            });
        }

        if (!validator.isEmail(email)) {
            throw new ServerError({
                message: "Please enter valid email address format.",
                statusCode: 400,
            });
        }

        userExist = await User.findOne({ email: email });
        if (userExist) {
            throw new ServerError({
                message: "User Already Exist.",
                statusCode: 400,
            });
        }

        if (userName.length >= 20) {
            throw new ServerError({
                message: "Your provided user name is too long.",
                statusCode: 400,
            });
        }

        if (password.length < 8) {
            throw new ServerError({
                message: "The minimum length of password is 8.",
                statusCode: 400,
            });
        }

        if (password.length > 16) {
            throw new ServerError({
                message: "The maximum length of password is 16.",
                statusCode: 400,
            });
        }

        if (password !== confirmPassword) {
            throw new ServerError({
                message: "The two passwords you enter do not match.",
                statusCode: 400,
            });
        }

        const userInfo: IUser = {
            email,
            userName,
            password: password,
        };

        await new User(userInfo).save();
        const newUser: UserDocument = await User.findOne({ email: email });
        sendToken({
            origin: req.get('Origin'),
            user: newUser,
            statusCode: 201,
            res: res,
        });
    }catch (err) {
        if (err instanceof ServerError) {
            res.status(err.statusCode).send(err.message);
        } else {
            res.status(500).send("Unexpected error.");
        }
}

}