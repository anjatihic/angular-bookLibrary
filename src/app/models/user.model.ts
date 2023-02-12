import {Loan} from "./loan.model";

enum UserRoleEnum{
  admin = 0,
  user = 1
}
export class User{
  id?: string;
  username: string;
  password: string;
  email: string;
  name: string;
  surname: string;
  loans: Loan[];
  role: UserRoleEnum;

}
