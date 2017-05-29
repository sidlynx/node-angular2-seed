import {EntityFactory} from "./entity";
import {UserEntity} from "../entity/user";


export class UserFactory extends EntityFactory<UserEntity> {
    findByEmail(email: string): Promise<UserEntity> {
        return new Promise((resolve, reject) => {
            reject(null);
        })
    }

    findByEmailOrUsername(emailOrUsername:string):Promise<UserEntity>{
        return new Promise((resolve,reject)=>{
            if(emailOrUsername.startsWith("username")){
                emailOrUsername = emailOrUsername.replace("username","");
                let number:number = parseInt(emailOrUsername);
                if(!isNaN(number)){
                    let user :UserEntity = new UserEntity("firstName" + number,"lastName" + number,"firstName" + number + "." + "lastName" + number + "@gmail.com","password" + number);
                    resolve(user);
                }
            }
            reject(null);
        })
    }

    findByEmailOrUsernameAndPassword(emailOrUsername:string,password:string){
        return new Promise((resolve,reject)=>{
            if(emailOrUsername.startsWith("username") && password.startsWith("password")){
                emailOrUsername = emailOrUsername.replace("username","");
                password = password.replace("password","");
                let number:number = parseInt(emailOrUsername);
                let numberBis:number = parseInt(password);
                if(!isNaN(number) && !isNaN(numberBis) && (number == numberBis)){
                    let user :UserEntity = new UserEntity("firstName" + number,"lastName" + number,"firstName" + number + "." + "lastName" + number + "@gmail.com","password" + number);
                    resolve(user);
                }
            }
            reject(null);reject(null);
        })
    }


}