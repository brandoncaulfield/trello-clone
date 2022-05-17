const app = require("./app");

const port = 3002;

const server = app.listen(port, () => {
  console.log(
    `The CORS enabled API server is running at http://localhost:${port}/api`
  );
});

module.exports = server;
