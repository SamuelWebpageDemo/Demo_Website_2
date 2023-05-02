import React, {useContext, useState, useEffect} from 'react'
import { Context } from '../../../hooks/Wrapper'
import Table from 'react-bootstrap/Table'

const Event5Descripton = () => {
    const context = useContext(Context)

    const [lang, setLang] = useState("")
  
    useEffect(()=>{
      String(context.locale).includes("en")? setLang("EN"):setLang("ZH")  
    },[context.locale])

    return (
        <div>
            {lang === "ZH"?
                <div>
                    <p>【香港人就業資訊會】一個專為香港人而設嘅就業資訊會</p>
                    <p>我哋之前向Council 反映過香港人對搵工、同學英文嘅問題之後，好開心得到回應。</p>
                    <p>Stockport Homes Employment team，Stockport Jobs Match 同 Stockport Council 聯手，特別為香港人舉辦一個就業資訊會，介紹好多我哋可以用嘅就業輔助同服務。其中包括一對一咨詢、根據個人資歷同技能做職位配對、技術同專業資格轉移等。當日仲有Stockport ESOL Advice Service 解答報讀英文課程嘅問題同登記。如果需要，現場亦有義工做翻譯。大家其實不妨嚟了解吓，原來Stockport 有好多免費提供俾大家嘅服務，其中有啲仲係用廣東話添，好多真係幫到手㗎，千其唔好浪費咗啲資源。</p>
                </div>
            :
                <div>
                    <p>【Hong Kong Job Information Session】An employment information session designed specifically for Hong Kong people.</p>
                    <p>We are delighted to receive a response after we previously raised concerns about Hong Kong people's difficulties in finding employment and learning English to the Council.</p>
                    <p>Stockport Homes Employment team, Stockport Jobs Match, and Stockport Council have joined forces to hold a job information event for Hong Kong people, providing various employment assistance and services. These services include one-to-one consultations, job matching based on personal qualifications and skills, and technical and professional qualification conversions. On the day, the Stockport ESOL Advice Service will also provide registration for English courses and answer questions. If needed, volunteers will provide translation services on-site. You can come and learn that Stockport has many free services available, some of which are even provided in Cantonese, which can be very helpful. Don't waste these resources.</p>
                </div>
            }

            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <td>{lang === "ZH"?"日期":""}</td>
                        <td>{lang === "ZH"?"3月17日 （星期五）":"March 17th (Friday)"}</td>
                    </tr>
                    <tr>
                        <td>{lang === "ZH"?"時間":"Time"}</td>
                        <td>{lang === "ZH"?"上午11:00 – 下午12:30":"11:00 am – 12:30 pm"}</td>
                    </tr>
                    <tr>
                        <td>{lang === "ZH"?"地點":"Location"}</td>
                        <td>First House, Brinnington SK5 8EN</td>
                    </tr>                    
                </tbody>
            </Table>

            <p>
                {lang === "ZH"?
                "登記請電郵：employmentsupport@stockporthomes.org (updated/已更新）或電0161 474 2862 "
                :
                "To register, please email employmentsupport@stockporthomes.org (updated) or call 0161 474 2862."}
            </p>

        </div>
    )
}

export default Event5Descripton
