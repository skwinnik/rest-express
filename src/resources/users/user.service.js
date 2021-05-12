import users from './user.memory.repository.js';

export class UserService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  getAll() {
    return this.usersRepository.getAll();
  }
}

export default new UserService(users);
