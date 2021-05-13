import ValidationError from './validation.error.js';

export default () => (err, req, res, next) => {
  if (err instanceof ValidationError) return res.status(400).send(err.toJson());
  return next(err);
};
