import express from 'express';
import Validator from '../../../common/validation/validator.js';
import TaskDto from './dto/task.dto.js';
import taskService from './task.service.js';

const router = express.Router({ mergeParams: true });
router
  .route('/')
  .get(async (req, res) => {
    const tasks = await taskService.getByBoardId(req.params.boardId);
    res.status(200).json(tasks);
  })
  .post(Validator.forType(TaskDto), async (req, res) => {
    const task = await taskService.create({
      ...req.body,
      boardId: req.params.boardId,
    });
    res.status(201).json(task);
  });

router
  .route('/:taskId')
  .get(async (req, res) => {
    const task = await taskService.get(req.params.taskId);
    if (!task) return res.sendStatus(404);
    return res.status(200).json(task);
  })
  .put(Validator.forType(TaskDto), async (req, res) => {
    const task = await taskService.update(req.params.taskId, req.body);
    if (!task) return res.sendStatus(400);
    return res.status(200).json();
  })
  .delete(async (req, res) => {
    const task = await taskService.delete(req.params.taskId);
    if (!task) return res.sendStatus(404);
    return res.status(204).json();
  });

export default router;
