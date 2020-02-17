const {
  createBankController
} = require('../factories');

const bankController = createBankController();

exports.loadIn = function loadIn(
  server,
  controller = bankController
) {

  server.post('/bank/payment',
    (...args) => controller.payService(...args)
  );
};