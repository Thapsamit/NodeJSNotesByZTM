const axios = require("axios");

axios
  .get("https://wwwww.google.com")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
