// import mongoose from "mongoose";
//
//
// const AdminModel = mongoose.model('admin',
//     new mongoose.Schema({
//         adminId: String,
//         adminName: String,
//         password: String
//     }), 'admin'
// );
//
// module.exports = AdminModel;

import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';

import db from '../mongodb.config';
import {UserDocument} from "./user";

const instance = db.instance;

export interface IAdmin {
    adminId?: string,
    adminName: string,
    password: string,
    email: string,
}

export type AdminDocument = mongoose.Document & IAdmin;

const adminSchema = new instance.Schema({
    adminId: { type: String, default: '' },
    adminName: { type: String, required: [true, 'User must have a name. '] },
    email: {
        type: String,
        unique: true,
        required: [true, 'User must have an email address.'],
        validate: [validator.isEmail, 'Please provide a valid email'],
    },
    password: {
        type: String,
        required: [true, 'User must have a password'],
    },
}, { collection: "admin"});

adminSchema.pre<AdminDocument>('save', async function (next) {
    const admin = this

    if (admin.isModified('password')) {
        console.log(admin.password)
        admin.password = await bcrypt.hash(admin.password, 8)
    }

    next()
})

export const Admin = instance.model<AdminDocument>('Admin', adminSchema);

