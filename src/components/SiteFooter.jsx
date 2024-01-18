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

            }}>
                
                <Box>
                    <Typography variant="subtitle1" component="h6" gutterBottom sx={{color: 'var(--font-grey)'}}>
                        &copy; 2024 Kelly's Crystal Clear Cleaning
                    </Typography>

                    <Typography variant="body2" color="text.secondary"sx={{color: 'var(--font-lightgrey)'}}>
                        All Rights Reserved.
                    </Typography>
                </Box>
                
                <Box>
                    <Typography variant="button" component="h6" gutterBottom sx={{
                        fontSize: '0.6rem',
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
                    gap: '1rem',

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

                    <Typography variant="subtitle1" component="h6" gutterBottom>
                        <Link href="/terms" target="_blank" rel="noopener">
                            Terms and Conditions
                        </Link>
                    </Typography>
                    <Typography variant="subtitle1" component="h6" gutterBottom>
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