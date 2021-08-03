import jwt from "jsonwebtoken"
import {User, UserDocument} from "../models/user";
import {CookieOptions, NextFunction, Request, Response} from "express";
import {ServerError} from "../util/util";
import {VerifiedUserRequest} from "./verifiedUserRequest";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let token: string;
        // For Unit Test or Postman Test
        if(req.header('Authorization')) {
            token = req.header('Authorization').replace('Bearer ', '');
        }
        // For actual request from frontend
        else if(req.cookies.jwt) {
            console.log("Auth:----" + token)
            token = req.cookies.jwt;
        }
        console.log("Auth:----" + token)

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // @ts-ignore
        const user = await User.findById(decoded.id);

        if (!user) {
            throw new ServerError({
                message: "Invalid Token",
                statusCode: 400,
            });
        }

        (req as VerifiedUserRequest).verifiedUser = user;
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

const ONE_DAY = 24 * 60 * 60 * 1000;
const createToken = (id: string): string => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1d',
    });
};

export const sendToken = ({origin, user, statusCode, res,}:
   {
    origin: string;
    user: UserDocument;
    statusCode: number;
    res: Response;
}): void => {
    const token = createToken(user._id);
    let cookieOptions: CookieOptions;
    if (process.env.NODE_ENV === 'development') {
        cookieOptions = {
            expires: new Date(Date.now() + ONE_DAY),
            httpOnly: false,
            secure: false,
            path: '/',
        };
    } else if (process.env.NODE_ENV === 'production') {
        cookieOptions = {
            expires: new Date(Date.now() + ONE_DAY),
            httpOnly: false,
            secure: true,
            path: '/',
        };
    }

    res.cookie('jwt', token, cookieOptions);
    res.status(statusCode).json({ user: user });
};
