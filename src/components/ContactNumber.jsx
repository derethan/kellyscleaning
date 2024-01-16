import PhoneIcon from '@mui/icons-material/Phone';


const contactNumber = ({className}) => {
    return (
        <a href="tel:905-909-1878">
            <div className={className}>
                <PhoneIcon className='phone-icon' />
                <p>905-909-1878</p>
            </div>
        </a>
    )
}

export default contactNumber;