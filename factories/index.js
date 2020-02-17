const BankService = require('../services/BankService');
const BankController = require('../controller/BankController');

function createBankService() {
  return new BankService();
}

function createBankController() {
  return new BankController({
    service: createBankService()
  });
}

module.exports = { createBankService, createBankController };
