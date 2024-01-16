// Desc: Social Icons, facebook, twitter, instagram, etc.

// import Component
import FacebookIcon from '@mui/icons-material/Facebook';

// import PropTypes
import PropTypes from 'prop-types';

const SocialIcons = ({ className }) => {
    return (
        <div className={className}>

        <div className='facebook'>
            <a href='https://www.facebook.com/profile.php?id=61553757477866'>
                <FacebookIcon sx={{
                    fontSize: '2.5rem',
                    color: 'var(--font-grey)',
                    '&:hover': {
                        color: 'var(--color-primary)',
                    },
                
                }}/>
            </a>
        </div>
        
  </div>
    )
}

SocialIcons.propTypes = {
    className: PropTypes.string,
};

export default SocialIcons;