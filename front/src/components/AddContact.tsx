import { useMutation, useQuery } from '@apollo/client';
import { FC, ReactNode, useState } from 'react';
import { ADD_CONTACT, GET_ALL_USERS_AZ } from '../queries';
import { AZContactsGql, Contact } from '../types';
import Contacts from './Contacts';
import "../styles/AddContactForm.css";
import { ContactEmotion } from '../styles/emotion';

const AddContact: FC = () => {

    const [AddContact, { data, loading, error }] = useMutation(ADD_CONTACT);
    const [name, setName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    return (
        <div className='Contact'>
            <div className='ContactForm'>
                <div className='ContactFormInput'>
                    <label>Name:</label>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div className='ContactFormInput'>
                    <label>Last Name:</label>
                    <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                </div>
                <div className='ContactFormInput'>
                    <label>Email:</label>
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className='ContactFormInput'>
                    <label>Phone:</label>
                    <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)}></input>
                </div>
                <button onClick={() => AddContact({ variables: { name, lastName, email, phone } })}>Add Contact</button>
            </div>
            {data && <ContactEmotion>
                <div className='ContactName'>{data.addContact.name}{" "}{data.addContact.last_name}</div>
                <p />
                <div className='ContactPhone'>{data.addContact.phone}</div>
                <p />
                <div className='ContactEmail'>{data.addContact.email}</div>
            </ContactEmotion>}
            {loading && <div>Loading...</div>}
            {error && <div>Error!</div>}
        </div>
    )
}
export default AddContact;