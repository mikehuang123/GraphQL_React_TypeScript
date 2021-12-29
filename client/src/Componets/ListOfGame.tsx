import { useQuery } from '@apollo/client'
import React from 'react'
import {GET_ALL_GAMES} from '../Graphql/Queries' 
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function ListOfGame() {
    const {data, error} = useQuery(GET_ALL_GAMES);
    // if(data){
    //     console.log(data);
    // }
    return (
        <div>
            {/* <table>
                            <tr>
                                <th>Title</th>
                                <th>Publisher</th>
                                <th>Description</th>
                            </tr>
                            <tr>
                                <td>{game.title}</td>
                                <td>{game.publisher}</td>
                                <td>{game.description}</td>
                            </tr>
                        </table>  */}
            {data &&
            (data.getAllGames.map((game:any)=>{
                return <div>
                        {<TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Title</TableCell>
                                    <TableCell align="right">Publisher</TableCell>
                                    <TableCell align="right">Description</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                    <TableRow>
                                    <TableCell component="th" scope="row">
                                        {game.title}
                                    </TableCell>
                                    <TableCell align="right">{game.publisher}</TableCell>
                                    <TableCell align="right">{game.description}</TableCell>
                                    </TableRow>
                                    </TableBody>
                            </Table>
                            </TableContainer>
                        }
                    </div>
            }))}
             
        </div>
    )
}

export default ListOfGame
