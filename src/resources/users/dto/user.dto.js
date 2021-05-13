import Validator from '../../../common/validation/validator.js';

export default class UserDto extends Validator {
  constructor({ name, login, password }) {
    super();
    this.name = name;
    this.login = login;
    this.password = password;
  }

  validate(errors) {
    if (this.login == null) errors.push('login is required');
    if (this.name == null) errors.push('name is required');
    if (this.password == null) errors.push('password is required');
  }
}
