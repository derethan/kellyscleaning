//Import Dependencies
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

//Import Components
import SocialIcons from './SocialIcons';
import MainButton from './MainButton';
import NavbarLinks from './NavbarLinks';

import { Button } from '@mui/material';


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
            <MainButton onClick={toggleMenu}> <FaBars /> </MainButton>
            
                <div className={`mobile-menu-container ${isOpen ? 'open' : ''}`}>
                {isOpen && (

                    <div className="mobile-menu">

                        <div className="mobile-menu-header">
                            <SocialIcons className='flex gap1' />
                            <Button
                                variant='contained'
                                size="small"
                                onClick={toggleMenu}
                                color='error'
                            >Close Menu
                            </Button>                        
                        </div>

                        <NavbarLinks  className='mobile-menu-links'  onClick={toggleMenu} />
                    </div>
                )}
                </div>
        </div>
        
    );
}

export default MobileMenu;