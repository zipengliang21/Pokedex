import mongoose, { Schema } from "mongoose";
import validator from 'validator';
import bcrypt from 'bcrypt';

import db from "../mongodb.config";
import {Pokemon} from"./pokemon";

const instance = db.instance;

export interface IProfile {
    userName: string;
    email: string;
    description?: string;
    avatar?: string;
    location?: string;
    password: string;
    collectionList:Array<string>;
    createdOn?: Date;
    updatedOn?: Date;
}

export type ProfileDocument = mongoose.Document & IProfile;

const profileSchema = new instance.Schema({
    userName: { type: String, required: [true, 'User must have a name. '] },
    email: {
        type: String,
        unique: true,
        required: [true, 'User must have an email address.'],
        validate: [validator.isEmail, 'Please provide a valid email'],
    },
    description: { type: String, default: 'no description' },
    avatar: {
        type: String,
        default: "http://3.bp.blogspot.com/-fZ-FTGBT_OI/V87me3nL3PI/AAAAAAAAAkQ/" +
            "ornK37y9NRgbYhQB1sjANbXUX2HxrISbgCK4B/s1600/068_Machamp.png",
    },
    location: { type: String, default: 'Canada' },
    password: {
        type: String,
        required: [true, 'User must have a password'],
    },
    createdOn: { type: Date, default: Date.now },
    updatedOn: { type: Date, default: Date.now },
}, { collection: "profile"})

// Hash the plain text password before saving
profileSchema.pre<ProfileDocument>('save', async function (next) {
    const profile = this

    if (profile.isModified('password')) {
        profile.password = await bcrypt.hash(profile.password, 8)
    }
    next()
})

export const Profile = instance.model<any>('Profile', profileSchema);
