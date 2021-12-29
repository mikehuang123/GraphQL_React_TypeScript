import React, {useState} from "react";
import {useMutation} from '@apollo/client';
import {CREATE_USER} from '../Graphql/Mutation';


function CreateUser(){
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [createUser, {error}] = useMutation(CREATE_USER); 
    return (
        <div className="createUser">
            <input type="text" placeholder="Name" onChange={(event)=> setName(event.target.value)}/><br/>
            <input type="text"  placeholder="User Name" onChange={(event)=> setUsername(event.target.value)}/><br/>
            <input type="text"  placeholder="Password"onChange={(event)=> setPassword(event.target.value)} /><br/>
            <button 
                onClick={
                ()=> {
                    createUser({
                    variables:{name:name, username: username, password:password}
                    })
                }
                }>
                Create User
            </button><br/>
        </div>
    )
}

export default CreateUser