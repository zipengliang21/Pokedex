import { Response } from 'express';
import { VerifiedUserRequest } from '../../middleware/verifiedUserRequest';
import { User, UserDocument } from '../../models/user';
import { ServerError } from '../../util/util';

export default async (req: VerifiedUserRequest, res: Response): Promise<void> => {
    /*
    The following code is potentially used for Unit test.
    If this function is used for REST api call, Since the middleware auth already figure out
    the verifiedUser, we can just return that user to the frontend. (No need to do another find)
    * */

    // const { _id } = req.verifiedUser._id;
    //
    // let user: UserDocument;
    // try {
    //     user = await User.findOne({ _id: _id });
    // } catch (err) {
    //     throw new ServerError({
    //         statusCode: 400,
    //         message: "User id does not exist.",
    //     });
    // }
    // if (!user) {
    //     throw new ServerError({
    //         statusCode: 400,
    //         message: "User id does not exist.",
    //     });
    // }

    res.status(200).json({ user: req.verifiedUser });
};
