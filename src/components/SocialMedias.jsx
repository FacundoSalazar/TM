import { BsDiscord, BsTwitter } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai' 
export const SocialMedias = () => {
    return(
        <div className='socialMedias'>
            <BsDiscord size={40} />
            <AiFillInstagram size={40} />
            <BsTwitter size={40}/>
        </div>
    )
}