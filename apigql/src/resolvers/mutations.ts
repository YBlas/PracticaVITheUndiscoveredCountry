import { ApolloError } from "apollo-server";
import { Collection } from "mongodb";
const ObjectId = require('mongodb').ObjectId;


export const Mutation = {
    addContact: async (parent: any, args: { name: string, last_name: string, email: string, phone: string }, context: { Contacts: Collection }) => {
        if (!await context.Contacts.findOne({ phone: args.phone })) {
            const addUser = await context.Contacts.insertOne({
                name: args.name,
                last_name: args.last_name,
                email: args.email,
                phone: args.phone,
            });
            return await context.Contacts.findOne({ _id: addUser.insertedId });
        } else {
            throw new ApolloError("Already existing contact");
        }
    },

    deleteContact: async (parent: any, args: { _id: string }, context: { Contacts: Collection }) => {
        const idLocal = new ObjectId(args._id);
        const deleteUser = await context.Contacts.findOneAndDelete({ _id: idLocal });
        if (deleteUser.value) {
            return deleteUser.value;
        } else {
            throw new ApolloError("Contact not found");
        }
    },

    editContact: async (parent: any, args: {_id:string, name:string, last_name:string, email:string, phone:string}, context: { Contacts: Collection }) => {
        const idLocal = new ObjectId(args._id);
        {args.name && await context.Contacts.updateOne({ _id: idLocal }, { $set: { name: args.name } })}
        {args.last_name && await context.Contacts.updateOne({ _id: idLocal }, { $set: { last_name: args.last_name } })}
        {args.email && await context.Contacts.updateOne({ _id: idLocal }, { $set: { email: args.email } })}
        {args.phone && await context.Contacts.updateOne({ _id: idLocal }, { $set: { phone: args.phone } })}
        
        const updatedUser = await context.Contacts.findOne({ _id: idLocal });
        if (updatedUser) {
            return updatedUser;
        } else {
            throw new ApolloError("Contact not found");
        }
    }
}