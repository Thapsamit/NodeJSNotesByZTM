const requests = require("./internals/requests"); // in same folder
const responses = require("./internals/responses");

//const internals = require('./internals') // then we can use like internals.requests etc

function makeRequest(url, data) {
  requests.send(url, data);
  return responses.read();
}

makeRequest("https://google.com", "Hello");
