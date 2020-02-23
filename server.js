const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([{
        'id':1,
        'image':'http://placeimg.com/64/64/1',
        'name':'홍길동',
        'birthday':'961223',
        'gender':'남자',
        'job':'대학생'
      },
      {
        'id':2,
        'image':'http://placeimg.com/64/64/2',
        'name':'오미자',
        'birthday':'941223',
        'gender':'남자',
        'job':'백수'
      },
      {
        'id':3,
        'image':'http://placeimg.com/64/64/3',
        'name':'강동원',
        'birthday':'920513',
        'gender':'남자',
        'job':'의사'
      }
      ]);
})

app.listen(port, () => console.log(`Listening on port ${port}`));