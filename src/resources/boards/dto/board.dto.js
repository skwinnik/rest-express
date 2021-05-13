// @todo fix alias
import Validator from '../../../common/validation/validator.js';

export default class BoardDto extends Validator {
  constructor({ title, columns }) {
    super();
    this.title = title;
    this.columns = columns;
  }

  validate(errors) {
    if (this.title == null) errors.push('title is required');
    // todo check if all Columns entities are valid?
    if (this.columns == null || !(this.columns instanceof Array))
      errors.push('columns is required and should be an array of Column');
  }
}
