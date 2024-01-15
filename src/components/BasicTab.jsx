import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';


import { NavLink } from 'react-router-dom';


export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <NavLink to="/">
            <Tab label="Home" />
          </NavLink>
          <NavLink to="/About">
            <Tab label="About us" />
          </NavLink>
        </Tabs>

  );
}