import './styles/Header.css'

import SocialIcons from "./SocialIcons";
import SiteTitle from './SiteTitle';
import ContactNumber from './ContactNumber';




const Header = () => {
    return (

        <header>
        
        <div className='title-container'>
          
          <SocialIcons className='social-container' />
          <SiteTitle className='site-title' />
          <ContactNumber className='contact-number'/>
        
        </div>

        </header>
    )
}

export default Header