
module.exports = class BaseService {
  static get Promise() {
    return Promise;
  }
  constructor({ repository }) {
    this.repository = repository;
  }

  payService(...args) {
    return this.repository.getAll(...args);
  }
};
