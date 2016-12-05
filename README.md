# koa-dynamodb-error

Convert a DynamoDB error into an HTTP error.

## usage

```javascript
var koaDynamoDBError = require('koa-dynamodb-error');

app.use(error()); // koa-error
app.use(koaDynamoDBError())); // translates some errors to http-errors
app.use(function* () {
  // do something with DynamoDB
});
```
