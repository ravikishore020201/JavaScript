const http = require("http");
let server = http.createServer((req, res) => {
    res.write("hello user");
    res.end();
})
server.listen(8000, () => {
    console.log("server started")
})
