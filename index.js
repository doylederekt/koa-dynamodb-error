var util = require('util');

module.exports = function() {
  return function* (next) {
    try {
      yield* next;
    } catch (err) {
      if (err === 'ConditionalCheckFailedException') {
        throw new HttpError.NotFound(err.cause.message);
      }
      throw err;
    }
  };
};
