import { Request, Response } from 'express';


class Test{
    test(req:Request,res:Response){
        res.send("test");
    }
}



module.exports = new Test();