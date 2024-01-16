// Desc: Social Icons, facebook, twitter, instagram, etc.

// import Component
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

// import PropTypes
import PropTypes from 'prop-types';

const SocialIcons = ({ className }) => {
    return (
        <div className={className}>

            <a href='https://www.facebook.com/profile.php?id=61553757477866'>
                <FacebookIcon sx={{
                    fontSize: '2.5rem',
                    color: { xs: 'var(--color-primary-contrast)', md: 'var(--font-grey)' },
                    '&:hover': {
                        color: { xs: 'var(--font-grey)', md: 'var(--color-primary)' },
                    },
                
                }}/>
            </a>        
            <a href='mailto:c.c.cleaning98@gmail.com'>
                <EmailIcon sx={{
                    fontSize: '2.5rem',
                    color: { xs: 'var(--color-primary-contrast)', md: 'var(--font-grey)' },
                    '&:hover': {
                        color: { xs: 'var(--font-grey)', md: 'var(--color-primary)' },
                    },
                
                }}/>
            </a>
  </div>
    )
}

SocialIcons.propTypes = {
    className: PropTypes.string,
};

export default SocialIcons;