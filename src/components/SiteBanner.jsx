// Import Images
import siteLogo from '../assets/logo_main.png';

// Import Components

// Import Styles
import './styles/SiteBanner.css';

const SiteBanner = () => {
    return (
        <div className='site-banner'>

            <img src={siteLogo} alt='site banner' className='banner-logo' />
            {/* Card Here */}
            <h1>Card Here</h1>

        </div>
        
    )
}

export default SiteBanner;