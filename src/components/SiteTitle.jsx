import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

const SiteTitle = ({className}) => {
  return (
    <div className={className}>
      <NavLink to="/">
        <h3>Kelly's Crystal Clear Cleaning</h3>
      </NavLink>
    </div>
  );
}

SiteTitle.propTypes = {
  className: PropTypes.string.isRequired,
};

export default SiteTitle;

