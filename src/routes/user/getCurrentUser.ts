import {Response} from "express";
import {VerifiedUserRequest} from "../../middleware/verifiedUserRequest";

export default async (req: VerifiedUserRequest, res: Response): Promise<void> => {
    /*
    The following code is potentially used for Unit test.
    If this function is used for REST api call, Since the middleware auth already figure out
    the verifiedUser, we can just return that user to the frontend. (No need to do another find)
    * */

    res.status(200).json({user: req.verifiedUser});
};
