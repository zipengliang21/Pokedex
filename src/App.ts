import cookieParser from "cookie-parser";
import cors from "cors";
import {Express, NextFunction, Request, Response} from "express";
import express from "express";
import http from "http";
import createError from "http-errors";
import logger from "morgan";
import path from "path";

import db from "./mongodb.config";
import setUpRoutes from "./routes/index";
import {normalizePort, stdout} from "./util/util";

export default class App {
    private readonly port: number;
    private readonly app: Express = express();
    private server: http.Server;

    constructor(port?: number | string) {
        this.port = normalizePort(port || 5000) as number;
    }

    start(): void {
        /*
        use logger
        */
        if (process.env.NODE_ENV !== "test") {
            this.app.use(logger("dev"));
        }

        const buildPath = path.join(__dirname, "../Pokedex-Frontend/build");
        this.app.use(express.static(buildPath));

        /*
        configure cross origin
        */
        this.app.use(
            cors({
                credentials: true,
                origin: [
                    "http://localhost:3000",
                    "https://liangzipeng.com",
                    "https://liangzipeng.com/",
                    "https://liangzipeng.com/Pokemon/",
                    "https://pokedex-website-2021.herokuapp.com",
                    "https://pokedex-website-2021.herokuapp.com/"
                ],
            })
        );

        /*
        configure express
        */
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(express.static(path.join(__dirname, "public")));

        /*
        configure cookie
        */
        this.app.use(cookieParser());

        /*
        print out request details if debug flag is enabled
        */
        this.app.use(stdout.printIncomingRequest);

        /*
        connect to db
        */
        db.connect();
        require("./models/pokemon");
        require("./models/post");
        require("./models/comment");
        require("./models/profile");
        require("./models/user");

        /*
        configure routes
        */
        setUpRoutes(this.app);

        /*
        catch 404 and forward to error handler
        */
        this.app.use(function (req: Request, res: Response, next: NextFunction) {
            next(createError(404));
        });


        this.server = this.app.listen(this.port, () => {
            stdout.success(`App running on port ${this.port}...`);
        });
    }

    stop(): void {
        this.server.close(() => {
            stdout.info("Server will stop.");
        });
    }
}
