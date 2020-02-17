const BaseService = require('../core/baseService');

module.exports = class BankService extends BaseService {

    async payService({
        accountType,
        customerId,
        serviceValue
    }) {
        const {
            id,
            currentValue
        } = await this.getCustomerAccount(accountType, customerId);

        const taxValue = resolveTax(accountType)(serviceValue, currentValue);

        return this.setAccountValue({
            accountId: id,
            taxValue
        });
    }

    async getCustomerAccount(params) {
        return this.repository.getCustomerAccount(params);
    }

    async resolveTax({
        accountType
    }) {
        const DEFAULT_TAX = 10.00;
        const tax = {
            currentAccount: {
                IOF: 10.00,
                SPREAD: 150.00
            },
            savingsAccount: {
                IOF: 14.00,
                SPREAD: 1300.00
            }

        }

        return {
            currentAccount: ({
                serviceValue,
                currentValue
            }) => {
                const currentAccountTax =
                    DEFAULT_TAX + tax[accountType].IOF + tax[accountType].SPREAD;

                const serviceAndTaxValue = serviceValue + currentAccountTax;

                return currentValue - serviceAndTaxValue;
            },
            savingsAccount: ({
                serviceValue,
                currentValue
            }) => {
                const savingsAccountTax =
                    DEFAULT_TAX * tax[accountType].IOF + tax[accountType].SPREAD;

                const serviceAndTaxValue = serviceValue + savingsAccountTax;

                return currentValue - serviceAndTaxValue;

            }
        } [accountType]
    }

    async setAccountValue(params) {
        return this.repository.setAccountValue(params)
    }

};