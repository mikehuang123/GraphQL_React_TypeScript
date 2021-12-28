import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { CREATE_GAME, DELETE_GAME, UPDATE_GAME } from "./Mutations/Game";
import { CREATE_USER, DELETE_USER, UPDATE_USER } from "./Mutations/User";
import { GET_ALL_GAMES } from "./Queries/Game";
import { GET_ALL_USERS } from "./Queries/User";

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllUsers: GET_ALL_USERS,
        getAllGames: GET_ALL_GAMES,
    },
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: CREATE_USER,
        deleteUser: DELETE_USER,
        updateUser: UPDATE_USER,

        createGame: CREATE_GAME,
        deleteGame: DELETE_GAME,
        updateGame: UPDATE_GAME,
    },
});


export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});