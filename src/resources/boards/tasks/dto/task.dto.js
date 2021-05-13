import Validator from '../../../../common/validation/validator.js';

export default class TaskDto extends Validator {
  constructor({ title, order, description, userId, boardId, columnId } = {}) {
    super();
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  validate() {
    const errors = [];
    if (this.title == null) errors.push('title is required');
    if (this.order == null) errors.push('order is required');
    if (this.description == null) errors.push('description is required');
    return errors;
  }
}
