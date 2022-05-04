import { useQuery } from '@apollo/client';
import { FC, ReactNode } from 'react';
import { GET_ALL_USERS_AZ, GET_ALL_USERS_ZA } from '../queries';
import { AZContactsGql, Contact, ZAContactsGql } from '../types';
import Contacts from './Contacts';

const AZContacts: FC = () => {

    const {data, loading, error} = useQuery<ZAContactsGql>(GET_ALL_USERS_ZA, {
        fetchPolicy:'network-only'
    });
    console.log(data);
    return (
        <div className='AZContacts'>
            {data && <Contacts Contacts={data?.ZAcontacts}></Contacts>}
            {loading && <div>Loading...</div>}
            {error && <div>Error!</div>}
        </div>
    )
}
export default AZContacts;