const http = require("http");
let sumCallCount = 0;
const server = http.createServer((req, res) => {
  //return Json data response
  res.setHeader("Content-Type", "application/json");
  // method post /sum
  if (req.method === "POST" && req.url === "/sum") {
    let body = "";
    // Get data from request
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      const data = JSON.parse(body);
      // Sum the numbers in the array
      const num1 = data.num1;
      const num2 = data.num2;
      /// Sum sum 1 and num 2
      const sum = num1 + num2;
      // Return the result as a JSON response
      sumCallCount++;
      res.end(JSON.stringify({ result: sum }));
    });
  } else if (req.method === "GET" && req.url === "/count-sum") {
    res.end(JSON.stringify({ result: sumCallCount }));
  } else {
    res.statusCode = 404;
    res.end(json.stringify("Not Found"));
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
