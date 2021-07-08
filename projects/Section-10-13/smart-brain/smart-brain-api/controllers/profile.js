const { response } = require("express");

const handleProfileGet = (req, res, db) => {
  const { id } = req.params;
  db.select('*').from('users').where({id})
    .then(user => {
      if (user.length) {
        res.json(user[0])
      } else {
        res.status(400).json('Not found')
      }
    })
    .catch(err => res.status(400).json('error getting user'))
}

const handleProfileUpdate = (req, res, db) => {
  const { id } = req.params;
  const { name, age, pet } = req.body.formInput;

  db('users')
    .where({id: id})
    .update({ name: name })
    .then(res => {
      if(res) {
        res.status(201).json("success")
      } else {
        res.status(400).json('Not found')
      }
    })
    .catch(err => res.status(400)).json('Error while updating user data')
}

module.exports = {
  handleProfileGet,
  handleProfileUpdate
}