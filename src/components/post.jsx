import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from "react";
import { getAllPosts } from '../PostsServer'

export const Post = (props) => {



  useEffect(async () => {
    userId = props.match.params.id
    console.log(props.match.params.id);
    AllPosts = await getAllPosts()
    getPostsById(userId)
  }, [])

  
  //הפעלת הפונקציה שמקבלת את הנתונים
  const getPostsById = (id) => {
    posts = AllPosts.filter(p => p.userId == id)
  }


  let userId
  let AllPosts
  let posts



  return <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>title</TableCell>
            <TableCell align="right">body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts != undefined &&
            posts.length > 0 &&
            posts.map((row) => (

              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.body}</TableCell>

              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>




  </>

 
}