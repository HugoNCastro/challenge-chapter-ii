import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const usersRepository = UsersRepository.getInstance();
    const findUser = usersRepository.findById(user_id);
    if(!findUser){
      throw new Error("This user cannot be admin!");
    }

    const turnAdmin = usersRepository.turnAdmin(findUser);

    return turnAdmin;
  }
}
export { TurnUserAdminUseCase };
