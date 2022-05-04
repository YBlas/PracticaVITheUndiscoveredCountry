import { useMutation, useQuery } from '@apollo/client';
import { FC, ReactNode, useState } from 'react';
import { ADD_CONTACT, GET_ALL_USERS_AZ, UPDATE_CONTACT } from '../queries';
import { AZContactsGql, Contact } from '../types';
import Contacts from './Contacts';
import "../styles/AddContactForm.css";
import { ContactEmotion } from '../styles/emotion';

const UpdateContact: FC = () => {

    const [UpdateContact, { data, loading, error }] = useMutation(UPDATE_CONTACT);
    const [name, setName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [_idLocal, set_idLocal] = useState<string>('');

    return (
        <div className='Contact'>
            <div className='ContactForm'>
                <div className='ContactFormInputMust'>
                    <label>_id:</label>
                    <input type='text' value={_idLocal} onChange={(e) => set_idLocal(e.target.value)}></input>
                </div>
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
                <button onClick={() => UpdateContact({ variables: {  _id:_idLocal, name, lastName, email, phone } })}>Update Contact</button>
            </div>
            {data && <ContactEmotion>
                <div className='ContactName'>{data.editContact.name}{" "}{data.editContact.last_name}</div>
                <p />
                <div className='ContactPhone'>{data.editContact.phone}</div>
                <p />
                <div className='ContactEmail'>{data.editContact.email}</div>
            </ContactEmotion>}
            {loading && <div>Loading...</div>}
            {error && <div>Error!</div>}
        </div>
    )
}
export default UpdateContact;