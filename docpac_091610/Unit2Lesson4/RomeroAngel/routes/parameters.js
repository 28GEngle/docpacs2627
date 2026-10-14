const express = require('express');
const app = express();
const router = express.Router();
app.use(parameterRouter);

router.get("/", (req, res) => {
    res.send("");
});