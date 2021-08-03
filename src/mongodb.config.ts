import mongoose, { Mongoose } from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

import { stdout } from "./util/util";
import * as CONFIG from './util/constants';

/*
remove deprecation warnings
*/
mongoose.set('useFindAndModify', false);


/*
set up promise
*/
mongoose.Promise = global.Promise;

const connect = (): Mongoose => {
    // connect to db
    mongoose.connect(CONFIG.MONGODB.uri, {
        useCreateIndex: true,
        useNewUrlParser: true,
        promiseLibrary: global.Promise,
        useUnifiedTopology: true,
    });

    // connection failed
    mongoose.connection.on('error', err => {
        stdout.error('db connection failed!');
        stdout.log(err.toString());
    });

    // connection successful
    mongoose.connection.once('open', () => {
        stdout.ready('db connection successful!');
    });
    // initialize auto-incrementing id
    // autoIncrement.initialize(mongoose.connection);

    // return mongoose instance
    return mongoose;
};

export const disconnect = (): void => {
    mongoose.disconnect();
};

export default {
    instance: mongoose,
    connect: connect,
    disconnect: disconnect,
};
