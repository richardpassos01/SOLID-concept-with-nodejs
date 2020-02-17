const Promise = require('bluebird');
const logger = require('../util/logger');

module.exports = class BaseController {
  static get Promise() {
    return Promise;
  }
  constructor({ service }) {
    this.service = service;
    this.errorHandler = (err = {}, req, res) => {
      logger.error(err);

      res.status(err.statusCode || 400).json(err);
    };
  }

  getAll(req, res, next) {
    return this.service.getAll()
    .then(result => res.json(result))
    .catch(err => this.errorHandler(err, req, res, next));
  }
};
