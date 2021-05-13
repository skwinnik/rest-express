import taskMemoryRepository from './task.memory.repository.js';
import Task from './task.model.js';

class TaskService {
  constructor(taskRepository) {
    this.taskRepository = taskRepository;
  }

  async getAll() {
    return this.taskRepository.getAll();
  }

  async create({ title, order, description, userId, boardId, columnId }) {
    return this.taskRepository.create(
      new Task({
        title,
        order,
        description,
        userId,
        boardId,
        columnId,
      })
    );
  }

  async get(id) {
    return this.taskRepository.get(id);
  }

  async update(id, { title, order, description, userId, boardId, columnId }) {
    const task = await this.get(id);
    if (!task) return null;
    task.title = title;
    task.order = order;
    task.description = description;
    task.userId = userId;
    task.boardId = boardId;
    task.columnId = columnId;
    return task;
  }

  async delete(id) {
    return this.taskRepository.delete(id);
  }

  async deleteByBoardId(boardId) {
    const tasks = await this.taskRepository.filter(
      (t) => t.boardId === boardId
    );
    return Promise.all(tasks.map((t) => this.taskRepository.delete(t.id)));
  }

  async unassignTasksByUserId(userId) {
    const tasks = await this.taskRepository.filter((t) => t.userId === userId);
    return Promise.all(
      tasks.map((t) => this.update(t.id, { ...t, userId: null }))
    );
  }
}

export default new TaskService(taskMemoryRepository);
