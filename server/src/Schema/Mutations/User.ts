import { GraphQLID, GraphQLString } from "graphql";
import { Users } from "../../Entities/Users";
import { UserType } from "../TypeDefs/User";
import { MessageType } from "../TypeDefs/MessageResponse";
// Create User
export const CREATE_USER = {
    type: UserType,
    args: {
        name: { type: GraphQLString},
        username: { type: GraphQLString},
        password: { type: GraphQLString},
    },
    async resolve(parent:any, args:any){
        const {name, username, password} = args;

        // Insert to db User table
        await Users.insert({name, username, password});  // or insert(args)
        return args;
    },
}

// Update User
export const UPDATE_USER = {
    type: MessageType,
    args: {
        username: { type: GraphQLString},
        oldPassword: { type: GraphQLString},
        newPassword: { type: GraphQLString},
    },
    async resolve(parent:any, args:any){
        const { username, oldPassword, newPassword} = args;
        const user = await Users.findOne({username: username});
        if(!user){
            throw new Error("Username does not existed");
        }
        const userPassword = user?.password;
        if(oldPassword === userPassword){
            if(oldPassword !== newPassword){
                await Users.update({username:username}, {password: newPassword});
                return{successful:true, message: "Password update"}
            } 
            else{return{successful:true, message: "Old and new Password are same"}};
        } else{
            throw new Error(`PASSWORD DO NOT MATCH`);
        }
      
    },
}

// Delete Users
export const DELETE_USER = {
    type: MessageType,
    args: {
        id: {type: GraphQLID},
    },
    async resolve(parent:any, args:any){
        const id = args.id;
        await Users.delete(id);
        return {successful: true, message: "Successful delete user"}
    },
}