import { Model } from "./entity.model";

export class UserModel extends Model {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: number;
  password: string;
  className: string = "USER";
}
