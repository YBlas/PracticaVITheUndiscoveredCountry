import { FC, ReactNode } from 'react';
import { Contact } from '../types';
import "../styles/Contact.css";
import { ContactEmotion } from '../styles/emotion';

const Contacts: FC<{ Contacts: Contact[] }> = ({ Contacts }) => {
    return (
        <div className='Contacts'>
            {Contacts.map(elem =>
                <ContactEmotion onClick={()=>{alert("ID: " + elem._id)}}>
                    <div className='ContactName'>{elem.name}{" "}{elem.last_name}</div>
                    <p/>
                    <div className='ContactPhone'>{elem.phone}</div>
                    <p/>
                    <div className='ContactEmail'>{elem.email}</div>
                </ContactEmotion>
            )}
        </div>
    )
}
export default Contacts;