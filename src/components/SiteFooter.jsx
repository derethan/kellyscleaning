// Desc: Site footer component

// import CSS
import './styles/GenericStyles.css'

// Import Components
import { Container, Box , Typography, Link } from '@mui/material'

const SiteFooter = () => {

    return (
        <footer>
            <Container className='banner-fade' sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',

                // backgroundColor: 'var(--color-primary)',
                
                minWidth: '100vw',

                position: 'absolute',
                left: 0,

                padding: '1rem',
                marginTop: 0,

            }}>
                <Box>
                    <Typography variant='body2' gutterBottom sx={{
                        color: 'var(--font-grey)',
                        fontSize: {xs: '0.5rem', md: '0.8rem', lg: '1rem'},                        
                        }}>
                        &copy; 2024 Kelly's Crystal Clear Cleaning
                    </Typography>

                    <Typography variant='subtitle1' sx={{
                        color: 'var(--font-lightgrey)',
                        fontSize: {xs: '0.5rem', md: '0.8rem', lg: '1rem'},                        
                        }}>
                        All Rights Reserved.
                    </Typography>
                </Box>
                

                <Box>
                    <Typography variant="button" component="p"  sx={{
                        
                        fontSize: {xs: '0.5rem'},                        
                        '& a': {
                            color: 'var(--font-lightgrey)',
                            textDecoration: 'none',
                            '&:hover': {
                              textDecoration: 'none',
                              cursor: 'pointer',
                            },
                          },
                    }}>
                        <a href='http://www.codedbyandrew.ca' target='_blank' rel='noreferrer'>
                            Coded <br /> by <br /> Andrew
                        </a>
                    </Typography>
                </Box>

                <Box sx={{ 
                    display: 'flex',
                    flexDirection: 'row',

                    '& a': {
                        color: 'var(--font-grey)',
                        textDecoration: 'none',
                        '&:hover': {
                            color: 'var(--color-primary)',
                            textDecoration: 'none',
                            cursor: 'pointer',
                        },
                      },
                    }}>

                    <Typography variant="subtitle1" component='div'  sx={{
                        fontSize: {xs: '0.5rem', md: '0.8rem', lg: '1rem'},                        
                    }}>
                        <Link href="/terms" target="_blank" rel="noopener">
                            Terms and Conditions
                        </Link>
                    </Typography>
                    <Typography variant="subtitle1" component='div' sx={{
                        fontSize: {xs: '0.5rem', md: '0.8rem', lg: '1rem'},
                    }}>
                        <Link href="/privacy" target="_blank" rel="noopener">
                            Privacy Policy
                        </Link>
                    </Typography>
                </Box>
            </Container>
        </footer>
    )
}

export default SiteFooter