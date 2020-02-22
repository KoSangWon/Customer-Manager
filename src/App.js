import React , {Component} from 'react';
import './App.css';
import Customer from './components/Customer';

const customer = [{
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
]

class App extends Component{
  render(){
    return(
      <div>
        {
          customer.map(c => {
            return <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          })
        }
      </div>
    );
  }
}

export default App;
