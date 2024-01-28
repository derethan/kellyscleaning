/************************************************ 
*   Component for the Navbar Links              *
*************************************************/

//Import Dependencies
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

//Import Navigation Links
import { siteLinks } from '../../Routes';

//Component
const NavbarLinks = ({className, onClick}) => {
    return (
        <div className={className} onClick={onClick}>

            {siteLinks.map((link) => {
                return (
                    
                    <NavLink 
                        key={link.ID} 
                        to={link.URL} 
                        className={({ isActive }) => isActive ? 'active-link' : ''}
                    >
                    {link.Name}
                    </NavLink>
                    
                )
            })}

        </div>
    )
}

//Prop Types
NavbarLinks.propTypes = {
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default NavbarLinks;