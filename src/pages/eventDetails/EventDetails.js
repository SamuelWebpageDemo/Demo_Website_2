import React, {useContext, useEffect, useState} from 'react'
import { Context } from '../../hooks/Wrapper'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const EventDetails = () => {

    const context = useContext(Context)
    const navigate = useNavigate()

    const [lang, setLang] = useState("")
  
    useEffect(()=>{
      String(context.locale).includes("en")? setLang("EN"):setLang("ZH")  
    },[context.locale])


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <div>
                <p className="font-bold">{context.pageDetails.title}</p>
            </div>

            <div>
                <img className="mx-auto" src={context.pageDetails.img} alt={context.pageDetails.title}/>
            </div>

            <br/>

            <div>
                {context.pageDetails.content}
            </div>

            <div className="text-center">
                <Button onClick={() => navigate(-1)}>{lang === "ZH"? "返回上一頁":"Go Back"}</Button>
            </div>

            <br/>

        </>
    )
}

export default EventDetails
