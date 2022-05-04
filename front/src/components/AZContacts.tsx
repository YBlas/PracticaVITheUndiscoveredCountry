import { useQuery } from '@apollo/client';
import { FC, ReactNode } from 'react';
import { GET_ALL_USERS_AZ } from '../queries';
import { AZContactsGql, Contact } from '../types';
import Contacts from './Contacts';

const AZContacts: FC = () => {

    const {data, loading, error} = useQuery<AZContactsGql>(GET_ALL_USERS_AZ, {
        fetchPolicy:'network-only'
    });
    console.log(data);
    return (
        <div className='AZContacts'>
            {data && <Contacts Contacts={data?.AZcontacts}></Contacts>}
            {loading && <div>Loading...</div>}
            {error && <div>Error!</div>}
        </div>
    )
}
export default AZContacts;