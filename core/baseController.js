const Promise = require('bluebird');
const debug = require('debug')('my-debug');

module.exports = class BaseController {
  static get Promise() {
    return Promise;
  }
  constructor({ service }) {
    this.service = service;
    this.errorHandler = (err = {}, req, res) => {
      debug(err);

      res.status(err.statusCode || 400).json(err);
    };
  }

  getAll(req, res, next) {
    return this.service.getAll()
    .then(result => res.json(result))
    .catch(err => this.errorHandler(err, req, res, next));
  }
};
