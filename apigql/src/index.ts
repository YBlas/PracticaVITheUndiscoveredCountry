import { ApolloServer } from 'apollo-server';
import { connectMongo } from './functions';
import { Mutation } from './resolvers/mutations';
import { Query } from './resolvers/queries';
import { typeDefs } from './Schema';

const resolvers = {
    Query,
    Mutation
}

const run = async () => {
    const Contacts = (await connectMongo()).collection("ReactUsers");

    const server = new ApolloServer({
        typeDefs, resolvers, context: ({ req, res }) => {
            if (req.body.query.includes("test")) {
                console.log("Hola desde el contexto porque has hecho un test");
            }
            return {
                Contacts
            }
        }
    });

    server.listen(6969).then(() => console.log('Server is running on port 6969'));
}

run();