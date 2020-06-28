const redis = require("redis");
const bluebird = require('bluebird')

bluebird.promisifyAll(redis)

const client = redis.createClient();

client.on("error", function(error) {
  console.error('here', error);
});
// client.set("key", "value", redis.print);
// client.get("key", redis.print);

module.exports = client
