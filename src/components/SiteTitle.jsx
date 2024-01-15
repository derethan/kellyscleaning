import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

import { NavLink } from 'react-router-dom';

const SiteTitle = ({className}) => {
  return (
    <div className={className}>
      <NavLink to="/">
        <Typography variant="h5" gutterBottom>
          Kelly's Crystal Clear Cleaning
        </Typography>
      </NavLink>
    </div>
  );
}

SiteTitle.propTypes = {
  className: PropTypes.string.isRequired,
};

export default SiteTitle;

