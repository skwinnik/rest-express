import { v4 as uuid } from 'uuid';

export default class Task {
  constructor({
    id = uuid(),
    title = 'TASK',
    order = 1,
    description = 'DESCRIPTION',
    userId,
    boardId,
    columnId,
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}
