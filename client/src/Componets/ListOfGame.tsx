import { useQuery } from '@apollo/client'
import React from 'react'
import {GET_ALL_GAMES} from '../Graphql/Queries'

function ListOfGame() {
    const {data, error} = useQuery(GET_ALL_GAMES);
    // if(data){
    //     console.log(data);
    // }
    return (
        <div>
            
            {data &&
            (data.getAllGames.map((game:any)=>{
                return <div>
                        <table>
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
                        </table>
                    </div>
            }))}
             
        </div>
    )
}

export default ListOfGame
