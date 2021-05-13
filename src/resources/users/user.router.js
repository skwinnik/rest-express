import express from 'express';
import Validator from '../../common/validation/validator.js';
import UserDto from './dto/user.dto.js';
import User from './user.model.js';
import usersService from './user.service.js';

const router = express.Router();
router
  .route('/')
  .get(async (req, res) => {
    const users = await usersService.getAll();
    res.status(200).json(users.map(User.toResponse));
  })
  .post(Validator.forType(UserDto), async (req, res) => {
    const user = await usersService.create(req.body);
    res.status(201).json(User.toResponse(user));
  });

router
  .route('/:userId')
  .get(async (req, res) => {
    const user = await usersService.get(req.params.userId);
    if (!user) return res.sendStatus(404);
    return res.status(200).json(User.toResponse(user));
  })
  .put(Validator.forType(UserDto), async (req, res) => {
    const user = await usersService.update(req.params.userId, req.body);
    if (!user) return res.sendStatus(400);
    return res.status(200).json();
  })
  .delete(async (req, res) => {
    const user = await usersService.delete(req.params.userId);
    if (!user) return res.sendStatus(404);
    return res.status(204).json();
  });

export default router;
