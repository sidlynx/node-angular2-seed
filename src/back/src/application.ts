import * as bodyParser from "body-parser";
import * as express from "express";
import * as cookieParser from "cookie-parser";
//import * as redis from "redis";
//import * as connectRedis  from "connect-redis";
import * as session from "express-session";
import * as passport from "passport";
import * as passportLocal from "passport-local";

import {Application,Request,Response} from "express";

import {UserFactory} from "./factory/user";
import {Api} from "./api";


export class MainApp {

    public app: Application;

    public static getInstance(): MainApp {
        return new MainApp();
    }

    private constructor() {
        this.app = express();

        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(bodyParser.raw({ limit: '50mb' }));
        this.app.use(bodyParser.text({ limit: '50mb' }));

        this.app.use(cookieParser("secretSign#143_!223"));



        //let redisClient = redis.createClient();
        //let redisStore = connectRedis(session);
        this.app.use(session({
            secret: 'ssshhhhh',
            //store: new redisStore({ host: 'localhost', port: 6379, client: redisClient, ttl: 3600 }),
            saveUninitialized: false,
            resave: false
        }));


        this.app.use(passport.initialize());
        this.app.use(passport.session());

        passport.serializeUser((user, done)=> {
            done(null, user.guid);
        });

        passport.deserializeUser((guid, done)=> {
            done(null, guid);
        });


        //<editor-fold desc="Local auth">
        //let LocalStrategy = require("passport-local").Strategy;
        let LocalStrategy = passportLocal.Strategy;
        passport.use(new LocalStrategy(
            (username, password, done)=> {
                let userFactory : UserFactory = new UserFactory(null);
                userFactory.findByEmailOrUsernameAndPassword(username,password).then((user)=>{
                    return done(null,user);
                },(error)=>{
                    return done(error, null);
                })
            }
        ));
        this.app.post('/auth', (req:Request, res:Response, next)=> {
            res.setHeader('Access-Control-Allow-Origin', '*');

            passport.authenticate('local', (err, user, info)=> {
                if (err) {
                    res.writeHead(500);
                    return res.end();
                }
                else {
                    req["logIn"](user, (err)=> {
                        if (err) {
                            return res.end();
                        }
                        res.writeHead(200,{"Content-Type": "text/plain"});
                        return res.end(JSON.stringify(user));
                    });
                }
            })(req, res, next);
        });
        //*/
        //</editor-fold desc="Local auth">



        this.app.post("/api",(req,res,next)=>{
            Api.run(req,res);
        })

        this.app.get("/",(req,res)=>{
            res.end("tt");
        })
        this.app.use("/",express.static('dist/public'));
    }

    run() {
        if (/^win/.test(process.platform)) {
            this.app.listen(80, ()=> {

            });
        }
        else {
            this.app.listen(8080, ()=> {

            });
        }
    }
}