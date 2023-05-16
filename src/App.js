import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { withStyles } from '@mui/styles';

 const styles = theme => ({
   root: {
    width: '100%',
    marginTop: theme.withStyles * 3,
    overflowX : "auto"
    },
  table:{
    minWidth: 1080
  }
})


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
  const { classes } = this.props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
      {customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> );})}
        </TableBody>
      </Table>
    </Paper>
    );
  }
}

export default withStyles(styles)(App);

