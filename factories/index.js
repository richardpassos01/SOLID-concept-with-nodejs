const createBankService = require('../services/BankService');
const createBankController = require('../controllers/BankController');

function createBankService() {
  return new BankService();
}

function createBankController() {
  return new BankController({
    service: createBankService()
  });
}

module.exports = { createBankService, createBankController };
