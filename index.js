const express = require("express");
const boyParser = require("body-parser");
const cors = require("cors");

var consign = require("consign");

const app = express();


app.use(cors());


consign()
    .include("models")
    .then("libs/middlewares.js")
    .then("routes")
    .then("libs/boot.js")
    .into(app);

// consign()
// .include("models")
// .then("routes")
// .into(app);

app.get("/api/resources", (req, res) => {
    const list = null;
    const data = {
        "results": [{
            "data": list,
        }],
        "statusCode": 200,
        "info": "Função executada com sucesso"
    };
    res.send(data);
});

