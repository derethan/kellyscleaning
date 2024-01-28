import '../styles/Header.css'

import SocialIcons from "../SocialIcons";
import SiteTitle from '../SiteTitle';
import ContactNumber from '../ContactNumber';

import { Box } from '@mui/material';


const Header = () => {
    return (

        <header>
        
          <Box display={'flex'} alignItems={'center'} padding={'1rem'} sx={{
            justifyContent: {
              xs: 'center',
              lg: 'space-between',
            },
          }}>
            <SocialIcons className='social-container' />
            <SiteTitle className='site-title' varient='h4' />
            <ContactNumber className='contact-number'/>
          </Box>

        </header>
    )
}

export default Header