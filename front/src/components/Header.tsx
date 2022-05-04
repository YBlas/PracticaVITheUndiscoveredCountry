import { FC, ReactNode } from 'react';
import "../styles/Header.css";

const Header: FC = () => {
    return (
        <div className='Header'>
            <img onClick={()=>{new Audio(require("../styles/callMe.mp3")).play();}} className='imgHead' src={require("../styles/Header.png")}></img>
        </div>
    )
}
export default Header;