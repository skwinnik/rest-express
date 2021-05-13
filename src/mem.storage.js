import Board from './resources/boards/board.model.js';
import Column from './resources/boards/column.model.js';
import User from './resources/users/user.model.js';

const user1 = new User({ name: 'Test 1', login: 'test1' });
const user2 = new User({ name: 'Test 2', login: 'test2' });
const user3 = new User({ name: 'Test 3', login: 'test3' });

const Users = [user1, user2, user3];

const board1 = new Board({
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

export { Users, Boards };
