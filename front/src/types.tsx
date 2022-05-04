
export type Contact = {
    _id: string;
    name: string;
    last_name: string;
    phone: string;
    email: string;
}

export type AZContactsGql = {
    AZcontacts: Contact[];
}

export type ZAContactsGql = {
    ZAcontacts: Contact[];
}

export type addContactGql = {
    addContact: Contact;
}

export type deleteContactGql = {
    deleteContact: Contact;
}

export type updateContactGql = {
    editContact: Contact;
}