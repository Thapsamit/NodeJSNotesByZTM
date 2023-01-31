const http = require("http"); // use https if want to request https urls

//const {request} = request('https') if destructure the function no need to write http.request instead request is sufficient

// const{get} = request('https) get function can be used instead of request method only with an advantage that we do not need to add an end in the request
http
  .request("http://jsonplaceholder.typicode.com/posts", (res) => {
    // the chunk in bytes data will be received
    let data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => {
      console.log("No More data");
      console.log(JSON.parse(data));
    });
  })
  .on("error", (err) => {
    console.log(err);
  })
  .end(); //need to be end otherwise request will not end
