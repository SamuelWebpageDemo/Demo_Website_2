import React, {useContext, useState, useEffect} from 'react'
//import { Button } from 'react-bootstrap'
import { Context } from '../../../hooks/Wrapper'

const Event3description = () => {
    const context = useContext(Context)

    const [lang, setLang] = useState("")
  
    useEffect(()=>{
      String(context.locale).includes("en")? setLang("EN"):setLang("ZH")  
    },[context.locale])
  
    return (
        <div>
            {lang==="ZH"?
            <div>
                <p>Solihull HongKongers CIC 正準備為土耳其地震，舉行義賣籌款，呢個亦係Hong Kong March 嘅活動之一。</p>
                <p>義賣食品全部都具有香港特色，例如有：鳳梨酥、滷水食物、薑醋蛋、蛋撻、咖喱魚蛋等等，希望到時見到大家，一齊為受到地震災害嘅人士籌款，感謝</p>
            </div>
            :
            <div>
                <p>Solihull HongKongers CIC launches charity sale for fundraising Turkey Earthquake. This is also a part of the activity Hong Kong March event.</p>
                <p>Varieties of Hong Kong styled food e.g. Pineapple shortcake, braised dishes, pork knuckles ginger stew with vinegar and eggs, egg custard tart, curry fishball etc. To show your support for all affected by Turkey Earthquake, see you there. </p>
            </div>
            }
        </div>
    )
}

export default Event3description
