const Promise = require('bluebird');
const DATABASE = require('../../database/base'); // TODO: create datase 

module.exports = class BaseRepository extends DATABASE {
  static get Promise() {
    return Promise;
  }
  constructor() {
    super();
  }

};
