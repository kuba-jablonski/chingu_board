const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();


//==============
//  APP CONFIG
//==============

mongoose.createConnection('mongodb://localhost/');
app.use(bodyParser.json());
app.use(methodOverride('_method'));


//==================
//  MONGOOSE CONFIG
//==================
//the schemas can be put in a separate module eventually

//----- PROJECT SCHEMA 
const projectSchema = new mongoose.Schema({
    title: String,
    image: String,
    description: String,
    created: {type: Date, default: Date.now}
});

const Project = mongoose.model('Project', projectSchema);

//----- USER SCHEMA
const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

const User = mongoose.model('User', userSchema);


//====================
//       ROUTES             
//====================

// allow CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// test route to check if requests work
app.get('/api/test', (req, res) => res.send('All is well!'));

//-----HOMEPAGE

app.get('/', (req, res) => {
    res.render('home');
});

//-----AUTH ROUTES:
////-----register
app.get('/signup', (req, res) => {
	res.render('signup');
});

////-----login 
app.get('/signin', (req, res) => {
    res.render('signin');
});

//-----ALL PROJECTS
app.get('/projects', (req, res) => {
    res.render('projects');
});

//-----ADD A PROJECT

app.get('/add', (req, res) => {
    res.render('add');
});



app.listen(3000, () => {
	console.log('App running on port 3000!')
});