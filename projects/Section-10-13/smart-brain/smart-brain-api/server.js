const express = require('express');
const bodyParser = require('body-parser');
// Change to a diff version of bcrypt
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const helmet = require('helmet');
const morgan = require('morgan');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const logout = require('./controllers/logout');
const profile = require('./controllers/profile');
const image = require('./controllers/image');
const auth = require('./middleware/authorization');

const db = knex({
  // connect to your own database here
  client: 'pg',
  connection: process.env.POSTGRES_URI
});

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan('combined'));

app.get('/', (req, res)=> { res.send("It's Working!") })
app.post('/signin', signin.signinAutherntication(db, bcrypt))
app.post('/logout', (req,res) => logout.handleLogout(req,res))
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
app.get('/profile/:id', auth.requireAuth, (req, res) => { profile.handleProfileGet(req, res, db)})
app.post('/profile/:id', auth.requireAuth, (req, res) => { profile.handleProfileUpdate(req, res, db)})
app.put('/image', auth.requireAuth, (req, res) => { image.handleImage(req, res, db)})
app.post('/imageurl', auth.requireAuth, (req, res) => { image.handleApiCall(req, res)})

app.listen(3000, ()=> {
  console.log('app is running on port 3000');
})
