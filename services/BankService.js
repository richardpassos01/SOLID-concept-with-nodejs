const BaseService = require('../../../../core/BaseService');

module.exports = class BankService extends BaseService {

    async payService({ accountType, customerId, serviceValue }) {
        const {
            id,
            currentValue
        } = await getCustomerAccount(accountType, customerId);

        const taxValue = resolveTax(accountType)(serviceValue, currentValue);

        return setAccountValue({
            accountId: id,
            taxValue
        });
    }

};
