import express from 'express';
import Validator from '../../common/validation/validator.js';
import boardService from './board.service.js';
import BoardDto from './dto/board.dto.js';

import tasksRouter from './tasks/task.router.js';

const router = express.Router();
router
  .route('/')
  .get(async (req, res) => {
    const boards = await boardService.getAll();
    res.status(200).json(boards);
  })
  .post(Validator.forType(BoardDto), async (req, res) => {
    const board = await boardService.create(req.body);
    res.status(201).json(board);
  });

router
  .route('/:boardId')
  .get(async (req, res) => {
    const board = await boardService.get(req.params.boardId);
    if (!board) return res.sendStatus(404);
    return res.status(200).json(board);
  })
  .put(Validator.forType(BoardDto), async (req, res) => {
    const board = await boardService.update(req.params.boardId, req.body);
    if (!board) return res.sendStatus(400);
    return res.status(200).json();
  })
  .delete(async (req, res) => {
    const board = await boardService.delete(req.params.boardId);
    if (!board) return res.sendStatus(404);
    return res.status(204).json();
  });

router.use('/:boardId/tasks', tasksRouter);

export default router;
