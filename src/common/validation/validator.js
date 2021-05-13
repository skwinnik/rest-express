/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import ValidationError from './validation.error.js';

export default class Validator {
  static forType(Type) {
    return (req, res, next) => {
      const instance = new Type(req.body);
      if (!(instance instanceof Validator))
        throw new Error(`${Type.name} is not a Validator!`);

      const errors = [];
      instance.validate(errors);
      if (errors.length > 0) return next(new ValidationError(errors));
      return next();
    };
  }

  validate(errors) {
    throw new Error('Not implemented');
  }
}
