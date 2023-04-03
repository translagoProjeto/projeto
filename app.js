
const bodyParser = require('body-parser')
const express = require("express");
const cors = require('cors');
const { engine } = require ('express-handlebars');
const routes = require('./src/router/router')
const Handlebars =  require ('handlebars')

const app = express();

app.engine('html', engine());
app.set('view engine', 'html');
app.set("views", "./views");

app.use(express.json());

app.use(cors({
    origin: '*'
})); 

//Body Parser
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json())

//
app.use(routes)


app.use('/style', express.static(__dirname + '/style'))
app.use('/img', express.static(__dirname + '/img'))


Handlebars.registerHelper('loud', function (aString) {
    return aString.toUpperCase()
})

Handlebars.registerHelper('ifeq', function (a, b, options) {
    if (a == b) { return options.fn(this); }
    return options.inverse(this);
});

app.listen(3000, () => {
    console.log("Servidor Esta Aberto!")
});