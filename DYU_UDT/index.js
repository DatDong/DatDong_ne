const http = require("http");
let sumCallCount = 0;
const history = [];
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
      /// Sum num 1 and num 2
      const sum = num1 + num2;
      // Return the result as a JSON response
      sumCallCount++;
      history.push({
        endpoint: "/sum",
        input: { num1, num2 },
        output: { sum },
      });
      res.end(JSON.stringify({ result: sum }));
    });
  } else if (req.method === "GET" && req.url === "/count-sum") {
    history.push({
      endpoint: "/count-sum",
      input: {},
      output: { sumCallCount },
    });
    res.end(JSON.stringify({ result: sumCallCount }));
  } else if (req.method === "GET" && req.url === "/current-time") {
    const currentTime = new Date().toISOString();
    history.push({
      endpoint: "/current-time",
      input: {},
      output: { currentTime },
    });
    res.end(JSON.stringify({ result: currentTime }));
  } else if (req.method === "GET" && req.url === "/history") {
    res.end(JSON.stringify({ history }));
  } else {
    res.statusCode = 404;
    res.end(json.stringify("Not Found"));
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
