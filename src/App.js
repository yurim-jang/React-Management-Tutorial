import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
 {
  'id': 1,
  'image': 'http://placeimg.com/64/64/any',
  'name': '홍기표',
  'birthday': '920705',
  'gender': '남자',
  'job': '엔지니어'
 },
 {
 'id': 2,
 'image': 'http://placeimg.com/64/64/2',
 'name': '김현준',
 'birthday': '940430',
 'gender': '남자',
 'job': '요식업'
 },
 {
  'id': 3,
  'image': 'http://placeimg.com/64/64/3',
  'name': '정로주',
  'birthday': '950114',
  'gender': '여자',
  'job': '엔지니어'
 }
]

class App extends Component {
render() {
  return (
    <div>
     {customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> );})}
    </div>
    );
  }
}

export default App;
