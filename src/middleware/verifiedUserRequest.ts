import {Request} from "express";

import {UserDocument} from "../models/user";

export type VerifiedUserRequest = Request & { verifiedUser?: UserDocument };

