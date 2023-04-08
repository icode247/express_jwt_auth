const express = require("express");
const passport = require("passport");
require('dotenv').config();
require("./passport-config")(passport);
const { router } = require("./routes/auth");

const app = express();

app.use(express.json());
app.use("/auth", router);
app.use(passport.initialize());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get(
  "/protected",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.send("You have accessed a protected route!");
  }
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
