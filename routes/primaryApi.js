module.exports = app =>{
    app.get("/api/resources/PrimaryApi", (req, res) => {
        const list = "Primeira api criada com sucesso!";
        const data = {
            "results": [{
                "data": list,
            }],
            "statusCode": res.statusCode,
            "info": "Função executada com sucesso!"
        };
        res.send(data);
    });
}
