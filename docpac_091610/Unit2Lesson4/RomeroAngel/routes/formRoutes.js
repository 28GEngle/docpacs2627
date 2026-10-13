const express = require('express');
const app = express();
const router = express.Router();

router.get("/form", (req, res) => {
    res.send("");
});


router.get("/form", (req, res) => {
    res.send("This is the form!");
});

module.exports = router;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});