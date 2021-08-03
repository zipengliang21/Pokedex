import { Request, Response } from 'express';
import {ServerError} from "../../util/util";
import {User, UserDocument} from "../../models/user";
import bcrypt from "bcrypt";
import {sendToken} from "../../middleware/auth";
import validator from "validator";

export default async (req: Request, res: Response): Promise<void> => {
        const {
            email,
            password
        } = req.body;
      try {
          // Empty email address
          if (!email) {
              throw new ServerError({
                  message: "Please provide your email address.",
                  statusCode: 400,
              });
          }

          // Invalid email address format
          if (!validator.isEmail(email)) {
              throw new ServerError({
                  message: "Please enter valid email address format.",
                  statusCode: 400,
              });
          }

          // Empty password
          if (!password) {
              throw new ServerError({
                  message: "Please provide your password.",
                  statusCode: 400,
              });
          }

          const user: UserDocument = await User.findOne({email});

          // non-existing user
          if (!user) {
              throw new ServerError({
                  message: "Unable to login, no user with this email.",
                  statusCode: 400,
              });
          }

          // check password encryption and match
          const isMatch = await bcrypt.compare(password, user.password)

          if (!isMatch) {
              throw new ServerError({
                  message: "Your provided password does not match with our record.",
                  statusCode: 400,
              });
          } else {
              await sendToken({
                  origin: req.get('Origin'),
                  user: user,
                  statusCode: 200,
                  res: res,
              });
          }
      }catch (err) {
          if (err instanceof ServerError) {
              res.status(err.statusCode).send(err.message);
          } else {
              res.status(500).send("Unexpected error.");
          }
      }

}
