import { MemoryRepository } from '../../common/memory.repository.js';
import { Users } from '../../mem.storage.js';

class UserMemoryRepository extends MemoryRepository {
  constructor({ data = [] } = {}) {
    super({ data });
  }
}

export default new UserMemoryRepository({ data: Users });
