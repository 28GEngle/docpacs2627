app.use((req, res, next) => {

    const currentTime = Date.now();
    console.log(currentTime);

    console.log(req.originalUrl);
    res.send();
    next();
});