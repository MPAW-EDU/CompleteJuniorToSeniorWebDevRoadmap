const jwt = require('jsonwebtoken');

const handleSignin = (db, bcrypt, req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return Promise.reject('Incorrect user or password');
  }
  return db.select('email', 'hash').from('login')
    .where('email', '=', email)
    .then(data => {
      const isValid = bcrypt.compareSync(password, data[0].hash);
      if (isValid) {
        return db.select('*').from('users')
          .where('email', '=', email)
          .then(user => user[0])
          .catch(err => Promise.reject('Unable to get user'))
      } else {
        Promise.reject('wrong credentials')
      }
    })
    .catch(err => Promise.reject('wrong credentials'))
}

const getAuthTokenId = () => {
  console.log('Authorized');
}

const signToken = (email) => {
  const jwtPayload = { email };
  return jwt.sign(jwtPayload, process.env.JWT_SECRET)
}

const createSessions = (user) => {
  // Create JWT token and return user data
  const { email, id } = user;
  const token = signToken(email)
}

const signinAutherntication = ( db, bcrypt ) => ( req,res ) => {
  const { authorization } = req.headers;
  return authorization ? 
        getAuthTokenId() : 
        handleSignin( db, bcrypt, req, res)
          .then(data => {
            data.id && data.email ? createSessions(data) : Promise.reject('Unauthorized User', data)
          })
          .catch(err => res.status(400).json(err))
}

module.exports = {
  handleSignin: handleSignin,
  signinAutherntication: signinAutherntication
}