import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faYoutube, faInstagram, faLinkedinIn, faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';

export default function SocialMedia({link, iconName}) {

    const getIcon = function (name) {
        switch(name) {
            case 'facebook':
                return faFacebookF;
            case 'youtube':
                return faYoutube;
            case 'linkedin':
                return faLinkedinIn;
            case 'twitter':
                return faTwitter;
            case 'telegram':
                return faTelegram;
        }
    }

    return (
        <Link href={link}>  
            <a target="_blank" 
                className="m-[.5rem] bg-[#625E94] hover:bg-[#6639E4] w-[2.5rem] h-[2.5rem] flex justify-center items-center rounded-full"> 
                <FontAwesomeIcon icon={getIcon(iconName)} size='xl' inverse className="hover:text-[black] p-[5px]"/> 
            </a>
        </Link>
    )
}