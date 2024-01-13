import PhoneIcon from '@mui/icons-material/Phone';


const contactNumber = ({className}) => {
    return (
        <div className={className}>
            <PhoneIcon className='phone-icon' />
            <p>905-909-1878</p>
        </div>

    )
}

export default contactNumber;