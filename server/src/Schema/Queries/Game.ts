import { GraphQLList } from 'graphql';
import { GameType } from '../TypeDefs/Game';
import { Games } from '../../Entities/Games';


export const GET_ALL_GAMES = {
    type: new GraphQLList(GameType),
    resolve(){
        return Games.find();
    },
};