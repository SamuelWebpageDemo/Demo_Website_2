import React, {useState, createContext} from 'react'
import { IntlProvider } from 'react-intl'
import English from "../lang/en-GB.json"
import Chinese from "../lang/zh-HK.json"
import { FormattedMessage } from 'react-intl'

export const Context = createContext();

//get the language of the user
const local = navigator.language

//change the default language depends of user browser language
let lang //degind the languae variable

if(String(navigator.language).includes("en")){
  lang = English
}else{
  lang = Chinese
}

const Wrapper = (props) => {

    const [locale, setLocale] = useState(local);
    const [messages, setMessages] = useState(lang)
    //for check box, ture for english, false for chinese
    //const [isChecked, setIsChecked] = useState(String(locale).includes("en")? true:false)
    
    //find the select location of the event
    const [location, setLocation] = useState(
        <FormattedMessage id="app.all" defaultMessage="All Locations"/>
    )

    const selectLang = (e) => {
        const newLocale = e.target.value
        setLocale(newLocale)
        if (newLocale === "Eng") {
            setMessages(English)
        } else {
            setMessages(Chinese)
        }
    }

    return (
        <>
        <Context.Provider value = {{locale, setLocale, selectLang, setMessages, location, setLocation}}>
            <IntlProvider messages={messages} locale={locale}>
                {props.children}
            </IntlProvider>
        </Context.Provider>
        </>
    )
}

export default Wrapper
