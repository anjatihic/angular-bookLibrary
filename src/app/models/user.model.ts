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
  loan: Loan;
  role: UserRoleEnum;

  constructor(username: string, password: string, email: string, name: string, surname: string) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.name = name;
    this.surname = surname;
    this.role = UserRoleEnum.user;
  }

}
