import {GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

export const GameType = new GraphQLObjectType({
    name: "Game",
    fields: () =>({
        id: { type: GraphQLID},
        title: { type: GraphQLString},
        description: { type: GraphQLString},
        publisher: { type: GraphQLString}
    }),
});
