const BaseRepository = require('../core/BaseRepository');


module.exports = class BankRepositry extends BaseRepository {
  constructor(params = {}) {
    super(params);
  }

  getCustomerAccount({ accountType, customerId }) {
    // TODO: Create get customer bank call
  }

  setAccountValue({ accountId, taxValue }) {
    // TODO: create set account
  }
};
