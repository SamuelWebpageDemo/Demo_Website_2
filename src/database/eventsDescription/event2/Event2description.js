import React, {useContext, useState, useEffect} from 'react'
//import { Button } from 'react-bootstrap'
import { Context } from '../../../hooks/Wrapper'
import Table from 'react-bootstrap/Table'

const Event2description = () => {
    const context = useContext(Context)

    const [lang, setLang] = useState("")
  
    useEffect(()=>{
      String(context.locale).includes("en")? setLang("EN"):setLang("ZH")  
    },[context.locale])

    return (
        <div>
        {lang === "ZH"?
            <p>
                “Hongkonger in Brighton“ 將會係4月和5月舉辦第一次Life in the Uk 茶聚溫習班，以輕鬆茶聚既方式進行，希望幫助街坊了解英國🇬🇧文化既同時，亦可為Life in the UK test 做準備，費用全免，屆時會有教材提供。
            </p>
        :
            <p>
                "Hongkonger in Brighton" will host its first "Life in the UK" tea gathering and review class in April and May in a relaxed and casual atmosphere. The aim is to help local residents understand British culture while preparing for the "Life in the UK" test. The class is free of charge, and study materials will be provided. If the response is good, we will do our best to arrange additional classes and hope for everyone's support.
            </p>
        }

        <p>{lang === "ZH"?"活動詳情":"Detail"}</p>
        <Table striped bordered hover>
            <tbody>

                <tr>
                    <td>{lang === "ZH"?"日期":"Date"}:</td>
                    <td>
                        {lang === "ZH"?
                            "共4堂，逢星期六 ，4月29， 5月13 ，5月20 ，5月27"
                            :
                            "4 sessions in total, every Saturday, on April 29th, May 13th, May 20th, and May 27th."
                        }
                    </td>
                </tr>
                <tr>
                    <td>{lang === "ZH"?"時間":"Time"}:</td>
                    <td>10:00am-11:30am</td>
                </tr>
                <tr>
                    <td>{lang === "ZH"?"地點":"Location"}</td>
                    <td>Rawlab 73 Trafalgar St, Brighton, Brighton and Hove, Brighton BN1 4EB</td>
                </tr>
                <tr>
                    <td>{lang === "ZH"?"名額":"Number of participants"}:</td>
                    <td>{lang === "ZH"?"10位，先到先得":"10, first-come-first-served"}</td>
                </tr>
            </tbody>
        </Table>

        <div>
            {lang === "ZH"?"如果反應好既話，我地會盡力再安排其他班，希望各位支持支持":"If the response is good, we will do our best to arrange other classes, and hope that everyone will support us."}
        </div>      


    

        </div>
  )
}

export default Event2description
