const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const {check} = require('express-validator/check');

const router = require('./routes');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

router(app);

app.use((req,res,error)=>{
	console.log(error);
	res.status(500).send(`error coming no Match found`);
})
app.listen(8080);
console.log('Server is running at', 8080);
