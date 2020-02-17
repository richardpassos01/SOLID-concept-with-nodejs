const BaseController = require('../../../../core/BaseController');

module.exports = class BankController extends BaseController {
    payService(req, res, next) {
        const params = {
            customerId: req.body.id,
            accountType: req.body.accountType,
            serviceValue: req.body.value
        }
        return this.service.payService(params)
            .then(values => res.json(values))
            .catch(err => this.errorHandler(err, req, res, next));
    }
};