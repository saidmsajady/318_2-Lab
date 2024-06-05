const express = require("express");
const app = express();
const PORT = 3000;

const userRoutes = require("./routes/user")

app.use("/user", userRoutes)

app.get("/", (req, res) => {

  res.send("Welcome to the base/home page");
});

app.get("/express", (req, res) => {
  res.send("Made it to the express page");
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

// app.listen(port, () => {
//   console.log(`Server listening on port: ${port}.`);
// });

// app.get("/", (req, res) => {
//   res.send("Try navigating to /user.");
// });

// app.get("/user", (req, res) => {
//   res.send(`Received a GET request for user!
// Try navigating to /user/somevalue/profile/somevalue.`);
// });

// app.get("/user/:userID", (req, res) => {
//   res.send(`Navigated to the user page for: ${req.params.userID}.`);
// });

// app.get("/user/:userID/profile", (req, res) => {
//   res.send(`Navigated to the user profile page for: ${req.params.userID}.`);
// });

// app.get("/user/:userID/profile/:data", (req, res) => {
//   res.send(
//     `Navigated to the user profile page for: ${req.params.userID}, with the data: ${req.params.data}.`
//   );
// });