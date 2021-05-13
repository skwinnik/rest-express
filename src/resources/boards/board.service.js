import boardMemoryRepository from './board.memory.repository.js';
import Board from './board.model.js';

class BoardService {
  constructor(boardRepository) {
    this.boardRepository = boardRepository;
  }

  async getAll() {
    return this.boardRepository.getAll();
  }

  async create({ title, columns }) {
    return this.boardRepository.create(new Board({ title, columns }));
  }

  async get(id) {
    return this.boardRepository.get(id);
  }

  async update(id, { title, columns }) {
    const board = await this.get(id);
    if (!board) return null;
    board.title = title;
    board.columns = columns;
    return board;
  }

  async delete(id) {
    return this.boardRepository.delete(id);
  }
}

export default new BoardService(boardMemoryRepository);
