const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
require("./db/config");

const port = process.env.port || 8000;

app.use(cors());
app.use(express.json());

const user_route = require("./routes/user_routs");
const urlPrivate_route = require("./routes/urlPrivet_route");
const redirectUrl = require("./routes/urlRedirect_route");

app.use("/", redirectUrl);
app.use("/api/user", user_route);
app.use("/api/urlPrivate", urlPrivate_route);

app.listen(port, () => {
  console.log(`server start at port no : ${port}`);
});
