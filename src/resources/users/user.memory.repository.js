// todo alias
import { Users } from '../../mem.storage.js';

class UserMemoryRepository {
  constructor({ data = [] } = {}) {
    this.data = data;
  }

  async getAll() {
    return this.data;
  }

  async get(id) {
    return this.data.find((u) => u.id === id);
  }

  async create(user) {
    this.data.push(user);
    return user;
  }

  async delete(id) {
    const user = await this.get(id);
    if (!user) return null;

    this.data.splice(this.data.indexOf(user), 1);
    return user;
  }
}

export default new UserMemoryRepository({ data: Users });
