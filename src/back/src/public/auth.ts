import { Request, Response } from 'express';


class Auth{
    login(req:Request,res:Response){
        res.end(req.body.username);
    }
    logout(req:Request,res:Response){
        req["logout"]();
        req["session"].destroy(function(err) {
            if (err) {
                let response = {
                    status: "ok"
                };
                res.json(response);
            } else {
                let response = {
                    status: "ok"
                };
                res.json(response);
            }
        });
    }
}



module.exports = new Auth();