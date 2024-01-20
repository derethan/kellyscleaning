import MobileMenu from "./MobileMenu";
import SiteTitle from "./SiteTitle";
import NavbarLinks from "./NavbarLinks";

import "./styles/navbar.css";

const Navbar = () => {


  return (
    <nav>
      <SiteTitle className="navbar-title" varient='h6' />
      <NavbarLinks  className='menu-links'/>
      <MobileMenu />
    </nav>
  )
}

export default Navbar;