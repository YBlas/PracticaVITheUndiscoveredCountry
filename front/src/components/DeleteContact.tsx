import { useMutation, useQuery } from '@apollo/client';
import { FC, ReactNode, useState } from 'react';
import { ADD_CONTACT, DELETE_CONTACT, GET_ALL_USERS_AZ } from '../queries';
import { AZContactsGql, Contact } from '../types';
import Contacts from './Contacts';
import { ContactEmotion } from '../styles/emotion';
import "../styles/AddContactForm.css";

const DeleteContact: FC = () => {

    const [DeleteContact, { data, loading, error }] = useMutation(DELETE_CONTACT);
    const [_idLocal, set_idLocal] = useState<string>('');


    return (
        <div className='Contact'>
            <div className='ContactForm'>
                <div className='ContactFormInput'>
                    <label>_id:</label>
                    <input type='text' value={_idLocal} onChange={(e) => set_idLocal(e.target.value)}></input>
                </div>
                <button onClick={() =>{console.log(_idLocal); DeleteContact({ variables: { _id: _idLocal } })}}>Delete Contact</button>
            </div>
            {data && <ContactEmotion>
                <div className='ContactName'>{data.deleteContact.name}{" "}{data.deleteContact.last_name}</div>
                <p />
                <div className='ContactPhone'>{data.deleteContact.phone}</div>
                <p />
                <div className='ContactEmail'>{data.deleteContact.email}</div>
            </ContactEmotion>}
            {loading && <div>Loading...</div>}
            {error && <div>Error!</div>}
        </div>
    )
}
export default DeleteContact;