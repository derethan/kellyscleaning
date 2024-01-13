//Import Dependencies
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

//Import Components
import SocialIcons from './SocialIcons';
import MenuButton from './MenuButton';
import NavbarLinks from './NavbarLinks';

//Import Styles
const MobileMenu = () => {

    //State to toggle the menu Open and Close, Default is Closed
    const [isOpen, setIsOpen] = useState(false);

    //Function to toggle the menu Open and Close
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='button-container'>
            <MenuButton className='menu-button-primary' buttonText={<FaBars />} onClick={toggleMenu} />
            
                <div className={`mobile-menu-container ${isOpen ? 'open' : ''}`}>
                {isOpen && (

                    <div className="mobile-menu">

                        <div className="mobile-menu-header">
                            <SocialIcons className=''/>
                            <MenuButton className='menu-button-white' buttonText='Close' onClick={toggleMenu} />
                        </div>

                        <NavbarLinks  className='mobile-menu-links'  onClick={toggleMenu} />
                    </div>
                )}
                </div>
        </div>
        
    );
}

export default MobileMenu;