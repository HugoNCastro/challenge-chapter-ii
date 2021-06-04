import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

/***interface IRequest {
  user_id: string;
}***/

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }): User[] {
    const userIsAdmin = this.usersRepository.findById(user_id);
    if(!userIsAdmin){
      throw new Error("User cannot be found !")
    }
    if (userIsAdmin.admin) {
      const users = this.usersRepository.list();
      return users;
    } else {
      throw new Error("Cannot list all users, your user is not admin!")
    }
  }
}

export { ListAllUsersUseCase };
