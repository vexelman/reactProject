import * as React from 'react';
import { useEffect } from "react";
import { getAllUsers } from "../UsersServer";
import { Link } from "react-router-dom"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const Home = () => {

  useEffect(async () => {
    //הפעלת הפונקציה שמקבלת את הנתונים
    users = await getAllUsers()
    usersArr = users;
    console.log(usersArr);
  }, [])



  let users;
  let usersArr;


  return <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">company</TableCell>
            <TableCell align="right">show posts</TableCell>
            <TableCell align="right">filter by name</TableCell>
            <TableCell align="right">filter by email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usersArr != undefined &&
            usersArr.length > 0 &&

            usersArr.map((row) => <>

              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >

                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.company.name}</TableCell>
                <TableCell align="right"><Link to="'/Posts/'+{item.id}"> Show your posts </Link> </TableCell>
                //המקום לסינון הנתונים
                <TableCell align="right"><input placeholder="filter by name" onChange={(e) => {
                  usersArr = users.filter(u => u.name == e.target.value)
                }}></input></TableCell>
                <TableCell align="right"><input placeholder="filter by Email" onChange={(e) => { ()=>
                  usersArr = users.filter(u => u.email.include(e.target.value))
                }}></input></TableCell>
              </TableRow>
            </>)}
        </TableBody>
      </Table>
    </TableContainer>
  </>
}



