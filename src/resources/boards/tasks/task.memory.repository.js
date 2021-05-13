import { MemoryRepository } from '../../../common/memory.repository.js';
import { Tasks } from '../../../mem.storage.js';

class TaskMemoryRepository extends MemoryRepository {
  constructor({ data }) {
    super({ data });
  }
}

export default new TaskMemoryRepository({ data: Tasks });
