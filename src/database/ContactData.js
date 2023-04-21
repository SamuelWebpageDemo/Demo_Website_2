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
        directLink:"mailto:englandgnc@gmail.com",
        popupWord:""
    },
    {
        id:1,
        name:"instagram",
        contactImage:instagram,
        directLink:"https://www.instagram.com/englandgnc/",
        popupWord:""
    },
    {
        id:2,
        name:"telegram",
        contactImage:telelgram,
        directLink:"",
        popupWord:"@Englandgnc"
    },
    {
        id:2,
        name:"tgChannel",
        contactImage:tgChannel,
        directLink:"https://t.me/enggnc/",
        popupWord:""
    },
    {
        id:3,
        name:"twitter",
        contactImage:twitter,
        directLink:"https://twitter.com/EnglandGoodNei1/",
        popupWord:""        
    },
    {
        id:4,
        name:"youtube",
        contactImage:youtube,
        directLink:"https://www.youtube.com/c/englandgnc/",
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
                        <p className={addressStyle}>Second Floor</p>
                        <p className={addressStyle}>Swan Building</p>
                        <p className={addressStyle}>20 Swan Street</p>
                        <p className={addressStyle}>Manchester</p>
                        <p className={addressStyle}>M4 5JW</p>
                    </div>,
    },
    {
        name:"London",
        location:<FormattedMessage id="app.london" defaultMessage="London"/>,
        pic:LondonMap,
        address:    <div>
                        <p className={addressStyle}>Ground Floor</p>
                        <p className={addressStyle}>15 Risborough Street</p>
                        <p className={addressStyle}>London</p>
                        <p className={addressStyle}></p>
                        <p className={addressStyle}>SE1 0HG</p>
                    </div>
    },
    {
        name:"Birmingham",
        location:<FormattedMessage id="app.birmingham" defaultMessage="Birmingham"/>,
        pic:BirminghamMap,
        address:    <div>
                        <p className={addressStyle}>8 The Wharf</p>
                        <p className={addressStyle}>16 Bridge Street</p>
                        <p className={addressStyle}>Birmingham</p>
                        <p className={addressStyle}></p>
                        <p className={addressStyle}>B1 2JS</p>
                    </div>
    },
    {
        name:"Bristol",
        location:<FormattedMessage id="app.bristol" defaultMessage="Bristol"/>,
        pic:BritolMap,
        address:    <div>
                        <p className={addressStyle}>Hope Community Church</p>
                        <p className={addressStyle}>Hope Chapel Hill</p>
                        <p className={addressStyle}>Hotwells</p>
                        <p className={addressStyle}>Bristol</p>
                        <p className={addressStyle}>BS8 4ND</p>
                    </div>
    },
]