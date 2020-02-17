const sinon = require('sinon');
const BankService = require('../services/BankService');

describe('BankService', function () {
  beforeEach(function () {
    this.repository = {
      getCustomerAccount: sinon.stub().resolves({
        id: 123,
        currentValue: 150.00
      }),
      setAccountValue: sinon.stub().resolves()
    };

    this.service = new BankService({
      repository: this.repository
    });

  });

  describe('#payService', function () {
    beforeEach(function () {
      this.mockObj = {
        customerId: 123,
        serviceValue: 10.00
      }
    });

    it('Should pay service with current account', async function () {
      const mock = {
        accountType: 'currentAccount',
        ...this.mockObj
      };

      await this.service.payService(mock);

      sinon.assert.calledOnce(this.repository.getCustomerAccount);
      sinon.assert.calledWith(this.repository.getCustomerAccount,
        this.mockObj.accountType, this.mockObj.customerId);

      sinon.assert.calledOnce(this.repository.setAccountValue);
      sinon.assert.calledWith(this.repository.setAccountValue,
        123, -30.00);
    });

    it('Should pay service with savings account account', async function () {
      const mock = {
        accountType: 'savingsAccount',
        ...this.mockObj
      };

      await this.service.payService(mock);

      sinon.assert.calledOnce(this.repository.getCustomerAccount);
      sinon.assert.calledWith(this.repository.getCustomerAccount,
        this.mockObj.accountType, this.mockObj.customerId);

      sinon.assert.calledOnce(this.repository.setAccountValue);
      sinon.assert.calledWith(this.repository.setAccountValue,
        123, -1300.00);
    });
  });
});