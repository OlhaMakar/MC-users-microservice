if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
};

console.log(`Stage is ${process.env.NODE_ENV}`);

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/models');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
 

app.post('/users', async function (req, res) {
  console.log(req);
  const createUser = await db.Users.create(req.body);
  res.send(createUser);
});
 
app.post('/user_connections', async function (req, res) {
  console.log(req);
  const createUser = await db.User_connections.create(req.body);
  res.send(createUser);
});

app.delete('/users/:id', async function (req, res) {
  const { id } = req.params;
  //const updateUser = await db.messages.findOne( { where: {id: id }} );
  const updatedUser = await db.User_connections.destroy( { where: {id: id }} );
  res.sendStatus(200);
});

app.listen(process.env.PORT, function () {
  console.log(`Example app listening on port ${process.env.PORT}!`);
});