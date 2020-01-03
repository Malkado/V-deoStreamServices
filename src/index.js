const express = require('express');
const boyParser = require('body-parser');
const firebase = require('firebase');

const app = express();

const firebaseConfig = {
    apiKey: "AIzaSyAYBs9nzaWdKrzOvmzYMkeVAOmBJkbaSAw",
    authDomain: "desafio-e52bd.firebaseapp.com",
    databaseURL: "https://desafio-e52bd.firebaseio.com",
    projectId: "desafio-e52bd",
    storageBucket: "desafio-e52bd.appspot.com",
    messagingSenderId: "1083628475861",
    appId: "1:1083628475861:web:90a0772587d30a8d04595c"
  };
app.use(boyParser.json());


firebase.initializeApp({
    serviceAccount: firebaseConfig,
    databaseURL: 'https://desafio-e52bd.firebaseio.com/'
});

var db = firebase.database();
var ref = db.ref("/Resultado");


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

app.get('/api/resources/Desafio', (req, res) => {
    ref.once("value", function(snapshot) {
        var data = snapshot.val();   //Data is in JSON format.
        console.log(data);
        res.send(data);
      });
    
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