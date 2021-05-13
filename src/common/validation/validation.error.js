export default class ValidationError extends Error {
  constructor(errors) {
    super();
    this.errors = errors;
  }

  toJson() {
    return JSON.stringify({ errors: this.errors });
  }
}
