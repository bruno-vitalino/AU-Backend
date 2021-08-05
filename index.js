const express = require('express');
const app = express();
const database = require("./manager/database")
const user = require("./routes/user")

const con = new database ({
  host: "localhost",
  user: "root",
  password: "root",
  database: "animaisuniversitarios"
});

global.db = con

app.use(express.json())
app.use("/api/user", user)
app.listen(3000, () => console.log("listening on port 3000")) 
