import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

import { NavLink } from 'react-router-dom';

const SiteTitle = ({className, varient}) => {
  return (
    <div className={className}>
      <NavLink to="/">
        <Typography variant={varient} gutterBottom>
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

