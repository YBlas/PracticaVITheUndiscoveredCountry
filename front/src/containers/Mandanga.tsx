import { FC, ReactNode } from 'react';

const Mandanga: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className='Mandanga'>
            {children}
        </div>
    )
}
export default Mandanga;