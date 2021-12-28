import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import {schema} from './Schema';
import cors from 'cors';
import { createConnection } from 'typeorm';
import { graphql } from 'graphql';
import { Users } from './Entities/Users';
import { Games } from './Entities/Games';


// Main
const main = async () => {

    // connect db
    await createConnection({
        type: "mysql",
        database: "test",
        username: "root",
        password: "",
        logging: true,
        synchronize: false,  // set it to true when creating new table
        entities: [Games],
    });


    const app = express();
    app.use(cors()); // allow all cors
    app.use(express.json());
    app.use(`/graphql`, graphqlHTTP({
        schema,
        graphiql: true
    }));

    app.listen(3001, ()=>{
        console.log("SERVER RUNNING ON PORT 3001");
    });
};


// Catch err
main().catch((err) =>{
    console.log(err);
});