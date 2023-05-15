import React, { Component, component } from 'react';
import Customer from './components/Customer'
import './App.css';

const Customer = {
  'name': '홍길동',
  'birthday': '961222',
  'gender': '남자',
  'jod':'대학생',
}

class App extends Component {
render() {
  return(
    <Customer
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      jod={customer.jod}
     />
  );
}
}

export default App;
