import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const findUserById = this.usersRepository.findById(user_id);
    if(!findUserById){
      throw new Error("User cannot be found!");
    }
    return findUserById;
  }
}

export { ShowUserProfileUseCase };
