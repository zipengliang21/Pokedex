import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';

import db from '../mongodb.config';

const instance = db.instance;

export interface IUser {
    userName: string;
    phone?: string;
    email: string;
    description?: string;
    avatar?: string;
    location?: string;
    password: string;
    confirmPassword?: string;
    isAdmin?: boolean;
    createdOn?: Date;
    updatedOn?: Date;
}

export type UserDocument = mongoose.Document & IUser;

const userSchema = new instance.Schema({
    userName: { type: String, required: [true, 'User must have a name. '] },
    phone: { type: String, default: '' },
    email: {
        type: String,
        unique: true,
        required: [true, 'User must have an email address.'],
        validate: [validator.isEmail, 'Please provide a valid email'],
    },
    description: { type: String, default: '' },
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
    isAdmin:{ type: Boolean, default: false },
    createdOn: { type: Date, default: Date.now },
    updatedOn: { type: Date, default: Date.now },
}, { collection: "profile"});


// Hash the plain text password before saving
userSchema.pre<UserDocument>('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        console.log(user.password)
        user.password = await bcrypt.hash(user.password, 8)
    }
    console.log(user)
    next()
})

export const User = instance.model<UserDocument>('User', userSchema);