import Board from './resources/boards/models/board.model.js';
import Column from './resources/boards/models/column.model.js';
import Task from './resources/boards/tasks/models/task.model.js';
import User from './resources/users/models/user.model.js';

const user1 = new User({ name: 'Test 1', login: 'test1' });
const user2 = new User({ name: 'Test 2', login: 'test2' });
const user3 = new User({ name: 'Test 3', login: 'test3' });

const Users = [user1, user2, user3];

const board1 = new Board({
  id: '1',
  title: 'Board 1',
  columns: [
    new Column({ title: 'Board 1 Column 1', order: 0 }),
    new Column({ title: 'Board 1 Column 2', order: 1 }),
  ],
});

const board2 = new Board({
  title: 'Board 2',
  columns: [
    new Column({ title: 'Board 2 Column 1', order: 0 }),
    new Column({ title: 'Board 2 Column 2', order: 1 }),
  ],
});
const Boards = [board1, board2];

const task1 = new Task({
  title: 'Task 1',
  order: 1,
  description: 'Description 1',
  userId: user1.id,
  boardId: board1.id,
  columnId: board1.columns[0].id,
});

const task2 = new Task({
  title: 'Task 2',
  order: 1,
  description: 'Description 2',
  userId: user1.id,
  boardId: board1.id,
  columnId: board1.columns[1].id,
});

const task3 = new Task({
  title: 'Task 3',
  order: 1,
  description: 'Description 3',
  userId: user1.id,
  boardId: board2.id,
  columnId: board2.columns[1].id,
});

const Tasks = [task1, task2, task3];

export { Users, Boards, Tasks };
