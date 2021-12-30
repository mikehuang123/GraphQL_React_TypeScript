import { useQuery } from '@apollo/client';
import React from 'react';
import {GET_ALL_GAMES} from '../Graphql/Queries'; 
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Title from './template/Title';

function ListOfGame() {
    const {data, error} = useQuery(GET_ALL_GAMES);
    // if(data){
    //     console.log(data);
    // }
    return (
        <div>
            <Title>List Of Games    </Title>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Title</TableCell>
                            <TableCell align="center">Publisher</TableCell>
                            <TableCell align="center">Description</TableCell>
                        </TableRow>
                    </TableHead>
                <TableBody>              
                    {data && (data.getAllGames.map((game:any)=>{
                        return <TableRow key={game.id}>
                            <TableCell align="center">{game.title}</TableCell>
                            <TableCell align="center">{game.publisher}</TableCell>
                            <TableCell align="center">{game.description}</TableCell>
                        </TableRow>
                    }))}
                    </TableBody> 
            </Table>
            </TableContainer> 
        </div>
       
    );
}

export default ListOfGame
