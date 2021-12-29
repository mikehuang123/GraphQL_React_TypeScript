import {gql} from "@apollo/client";

export const GET_ALL_GAMES = gql`
    query getAllGames{
        getAllGames{
            title
            publisher
            description
        }
    }
`


