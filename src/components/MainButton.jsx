//Import Dependencies
import Button from '@mui/material/Button';

const MainButton = ({ children, color, fontcolor, ...props }) => {

    return (
        <Button 
            variant='contained' 
            size="large" 
            sx={{
                backgroundColor: color || 'var(--color-primary)',
                color: fontcolor || 'white',
                
                '&:hover': {
                    backgroundColor: `rgba(var(--color-primary-rgb), 0.8)`
                                },
            }}
            {...props}
        >
            {children}

            </Button>
    );
    }

export default MainButton;