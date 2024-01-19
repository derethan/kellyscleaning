import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';


const BaseTheme = styled('h4')(({ theme }) => ({
  //Variants

    [theme.breakpoints.down('md')]: {
      fontSize: '1.0rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2.0rem',
    },
  }));


  export default BaseTheme;

