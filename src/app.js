const fs = require("fs");
const path = require("path");
const express = require("express");
const { render } = require("express/lib/response");
const res = require("express/lib/response");
const app = express();
const { accounts, users, writeJSON } = require("./data");
const accountRoutes = require("./routes/accounts.js");
const servicesRoutes = require("./routes/services.js");


app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");


app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("index", {
    title: "Account Summary",
    accounts,
  });
});
app.use("/account", accountRoutes);
app.use("/services", servicesRoutes);
/*
app.get("/savings", function (req, res) {
  res.render("account", {
    account: accounts.savings,
  });
});

app.get("/checking", function (req, res) {
  res.render("account", {
    account: accounts.checking,
  });
});

app.get("/credit", function (req, res) {
  res.render("account", {
    account: accounts.credit,
  });
});
*/
app.get("/profile", function (req, res) {
  res.render("profile", {
    user: users[0],
  });
});


app.listen(3000, function () {
  console.log("PS Project Running on port 3000!");
});
