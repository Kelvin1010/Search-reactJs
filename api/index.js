// import { express } from 'express';
// import cors from 'cors'
// import { Users } from './users';

const Users = require('./users')
const cors = require('cors')
const express = require('express')
const app = express();

app.use(cors())

app.get("/", (req, res) => {
    const { q } = req.query;
  
    const keys = ["first_name", "last_name", "email"];
  
    const search = (data) => {
      return data.filter((item) =>
        keys.some((key) => item[key].toLowerCase().includes(q))
      );
    };
  
    q ? res.json(search(Users).slice(0, 10)) : res.json(Users.slice(0, 10));
});
app.listen(1919, () => console.log("API is working!"));