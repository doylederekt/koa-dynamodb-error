const httpErrors = require('http-errors');

module.exports = function() {
  return function* (next) {
    try {
      yield* next;
    } catch (err) {
      if (err.code === 'ConditionalCheckFailedException') {
        throw new httpErrors.NotFound(err.cause.message);
      }
      throw err;
    }
  };
};
