import PropTypes from 'prop-types';

const SocialIcons = ({ className }) => {
    return (
        <div className={className}>

        <div className='facebook'>
            <a href='hhttps://www.facebook.com/profile.php?id=61553757477866'>
                <img src='../facebook.png' alt='facebook' style={{width:50}}/>
            </a>
        </div>
        
  </div>
    )
}

SocialIcons.propTypes = {
    className: PropTypes.string.isRequired,
};

export default SocialIcons;