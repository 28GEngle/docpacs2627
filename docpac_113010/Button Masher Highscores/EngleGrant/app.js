const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json());

app.use("", (req,res) => {
    res.end("Invalid")
})

app.listen(3000,"localhost", () => {
    console.log(`listening on port 3000`)
});