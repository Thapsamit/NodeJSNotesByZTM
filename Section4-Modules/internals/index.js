// Method 1
module.exports = {
  requests: require("./requests"),
  responses: require("./responses"),
};

// Method 2

// const requests = require("./requests");
// const responses = require("./responses");
// module.exports = {
//   send: requests.send,
//   read: responses.read,
// };

// Method 3

// module.exports = {
//   ...require("./requests"),
//   ...require("./responses"),
// };
