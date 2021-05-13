import { MemoryRepository } from '../../common/memory.repository.js';
import { Boards } from '../../mem.storage.js';

class BoardMemoryRepository extends MemoryRepository {
  constructor({ data }) {
    super({ data });
  }
}

export default new BoardMemoryRepository({ data: Boards });
