module.exports = app => {
    app.listen(app.get("port"), () => {
        console.log(`NTask Api= porta ${app.get("port")}`)
    });
}