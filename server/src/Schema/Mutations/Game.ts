import { GraphQLID, GraphQLString } from "graphql";
import { MessageType } from "../TypeDefs/MessageResponse";
import { GameType } from "../TypeDefs/Game";
import { Games } from "../../Entities/Games";

// Create Game
export const CREATE_GAME = {
    type: GameType,
    args: {
        title: { type: GraphQLString},
        publisher: { type: GraphQLString},
        description: { type: GraphQLString},
    },
    async resolve(parent:any, args:any){
        const {title, publisher, description} = args;

        // Insert to db User table
        await Games.insert({title, publisher, description});  // or insert(args)
        return args;
    },
}

// Update Game
export const UPDATE_GAME = {
    type: MessageType,
    args: {
        title: { type: GraphQLString},
        newPublisher: { type: GraphQLString},
        newDescription: { type: GraphQLString},
    },
    async resolve(parent:any, args:any){
        const { title, newPublisher, newDescription } = args;
        const game = await Games.findOne({title: title});
        if(!title){
            throw new Error("This game does not existed");
        }
        if(newPublisher != null && newDescription != null){
            await Games.update({title:title}, {publisher: newPublisher, description: newDescription});
            return{successful:true, message: "Publisher and Description update"}
        }
        else if(newPublisher != null){
            await Games.update({title:title}, {publisher: newPublisher});
            return{successful:true, message: "Publisher update"}
        } else if(newDescription != null){
            await Games.update({title:title}, {description: newDescription});
            return{successful:true, message: "Description update"}
        } else{
            throw new Error("Game Update Failed");
        }
    },
}

// Delete Users
export const DELETE_GAME = {
    type: MessageType,
    args: {
        id: {type: GraphQLID},
    },
    async resolve(parent:any, args:any){
        const id = args.id;
        await Games.delete(id);
        return {successful: true, message: "Successful delete game"}
    },
}