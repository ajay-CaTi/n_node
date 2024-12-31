// const express = require("express");
// port = 4000;

// const app = express();

// app.get("/", (req, res) => {
//   res.send("Home sweet home");
// });

// app.get("/task", (req, res) => {
//   res.send("Hello task");
// });

// app.get("/about", (req, res) => {
//   res.send("Hello About");
// });

// app.listen(port, () => {
//   console.log(`App is listningon port ${port}`);
// });

const express = require("express");
const port = 7777;

const app = express();

app.use("/test", (req, res) => {
  res.send("Hello test");
});

app.use("/home", (req, res) => {
  res.send("Hello hhoommee");
});

// app.use("/", (req, res) => {
//   res.send("Hello Home");
// });
// app.get("/", (req, res) => {
//   res.send("Hello Home");
// });

// app.get("/test", (req, res) => {
//   res.send("Hello test");
// });

// app.get("/home", (req, res) => {
//   res.send("Hello");
// });

app.listen(port, (req, res) => {
  console.log(`app listening on port ${port}`);
});
