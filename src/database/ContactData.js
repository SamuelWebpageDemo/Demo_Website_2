//list of logo
import email from "../pic/contactLogo/email-envelop-open-icon.svg"
import instagram from "../pic/contactLogo/ig-instagram-icon.svg"
import telelgram from "../pic/contactLogo/telegram-icon.svg"
import tgChannel from "../pic/contactLogo/telegram-black-icon.svg"
import twitter from "../pic/contactLogo/twitter-round-color-icon.svg"
import youtube from "../pic/contactLogo/youtube-app-icon.svg"
//for accessong the language file
import { FormattedMessage } from 'react-intl';
import ManchesterMap from "../pic/location/manchester.jpg"
import LondonMap from "../pic/location/london.jpg"
import BirminghamMap from "../pic/location/birmingham.jpg"
import BritolMap from "../pic/location/bristol.jpg"

export const ContactLogo = [
    {
        id:0,
        name:"E-mail",
        contactImage:email,
        directLink:"mailto:XXX@gmail.com",
        popupWord:""
    },
    {
        id:1,
        name:"instagram",
        contactImage:instagram,
        directLink:"https://www.instagram.com/",
        popupWord:""
    },
    {
        id:2,
        name:"telegram",
        contactImage:telelgram,
        directLink:"",
        popupWord:"@Demo"
    },
    {
        id:2,
        name:"tgChannel",
        contactImage:tgChannel,
        directLink:"https://t.me/",
        popupWord:""
    },
    {
        id:3,
        name:"twitter",
        contactImage:twitter,
        directLink:"https://twitter.com/",
        popupWord:""        
    },
    {
        id:4,
        name:"youtube",
        contactImage:youtube,
        directLink:"https://www.youtube.com",
        popupWord:""         
    }
]

let addressStyle = "whitespace-nowrap leading-6"

export const ContactAddress = [
    
    {
        name: "Manchester",
        location: <FormattedMessage id="app.manchester" defaultMessage="Manchester"/>,
        pic:ManchesterMap,
        address:    <div>
                        <p className={addressStyle}>Demo Floor</p>
                        <p className={addressStyle}>Demo Building</p>
                        <p className={addressStyle}>Demo Street</p>
                        <p className={addressStyle}>Manchester</p>
                        <p className={addressStyle}>M8 8KK</p>
                    </div>,
    },
    {
        name:"London",
        location:<FormattedMessage id="app.london" defaultMessage="London"/>,
        pic:LondonMap,
        address:    <div>
                        <p className={addressStyle}>Example Floor</p>
                        <p className={addressStyle}>Example Building</p>
                        <p className={addressStyle}>Example Street</p>
                        <p className={addressStyle}>London</p>
                        <p className={addressStyle}>L8 8KK</p>
                    </div>
    },
    {
        name:"Birmingham",
        location:<FormattedMessage id="app.birmingham" defaultMessage="Birmingham"/>,
        pic:BirminghamMap,
        address:    <div>
                        <p className={addressStyle}>Test Floor</p>
                        <p className={addressStyle}>Test Building</p>
                        <p className={addressStyle}>Test Street</p>
                        <p className={addressStyle}>Birmingham</p>
                        <p className={addressStyle}>B8 8KK</p>
                    </div>
    },
    {
        name:"Bristol",
        location:<FormattedMessage id="app.bristol" defaultMessage="Bristol"/>,
        pic:BritolMap,
        address:    <div>
                        <p className={addressStyle}>Trial Floor</p>
                        <p className={addressStyle}>Trial Building</p>
                        <p className={addressStyle}>Trial Street</p>
                        <p className={addressStyle}>Bristol</p>
                        <p className={addressStyle}>BS8 8KK</p>
                    </div>
    },
]