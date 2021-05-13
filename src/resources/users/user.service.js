import _taskService from '../boards/tasks/task.service.js';
import repository from './user.memory.repository.js';
import User from './user.model.js';

export class UserService {
  constructor(usersRepository, taskService) {
    this.usersRepository = usersRepository;
    this.taskService = taskService;
  }

  async getAll() {
    return this.usersRepository.getAll();
  }

  async create({ name, login, password }) {
    return this.usersRepository.create(new User({ name, login, password }));
  }

  async get(id) {
    return this.usersRepository.get(id);
  }

  async update(id, { name, login, password }) {
    const user = await this.get(id);
    if (!user) return null;

    user.name = name;
    user.login = login;
    user.password = password;

    return user;
  }

  async delete(id) {
    await this.taskService.unassignTasksByUserId(id);
    return this.usersRepository.delete(id);
  }
}

export default new UserService(repository, _taskService);
