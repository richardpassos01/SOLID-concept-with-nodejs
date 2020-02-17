const BankRepository = require('../repositories/BankRepository')
module.exports = class BaseService {
  static get Promise() {
    return Promise;
  }
  constructor(params = {}) {
    super(params);
    this.repository = params.repository || new BankRepository();

  payService(...args) {
    return this.repository.getAll(...args);
  }
};
