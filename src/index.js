const express = require('express');
const boyParser = require('body-parser');

const app = express();


app.use(boyParser.json());


app.use(boyParser.urlencoded({ extended: false }));

app.get('', (req, res) => {
    res.send('OK');
});

app.get('/api/resources/PrimaryApi', (req, res) => {
    const list = 'Primeira api criada com sucesso!';
    const data = {
        'results': [{
            'data': list,
        }],
        'statusCode': 200,
        'info': 'Função executada com sucesso!'
    };
    res.send(data);
});

app.get('/api/resources', (req, res) => {
    const list = null;
    const data = {
        'results': [{
            'data': list,
        }],
        'statusCode': 200,
        'info': 'Função executada com sucesso'
    };
    res.send(data);
});

app.listen(3000);