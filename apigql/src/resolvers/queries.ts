import { Collection } from "mongodb";


export const Query = {
    test: () => { return "Esto funciona!!" },

    AZcontacts: async (parent: any, args: any, context: { Contacts: Collection }) => {
        const contactsAlpha = await context.Contacts.find().sort({name: 1}).collation({locale: "en_US", numericOrdering: true}).toArray();
        console.log(contactsAlpha);
        return contactsAlpha;
    },

    ZAcontacts: async (parent: any, args: any, context: { Contacts: Collection }) => {
        const contactsAlpha = await context.Contacts.find().sort({name: -1}).collation({locale: "en_US", numericOrdering: true}).toArray();
        console.log(contactsAlpha);
        return contactsAlpha;
    }
}