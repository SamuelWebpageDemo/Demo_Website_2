import React, {useContext, useState, useEffect} from 'react'
import { Button } from 'react-bootstrap'
import { Context } from '../../../hooks/Wrapper'
import Table from 'react-bootstrap/Table'

const Event4description = () => {

    const context = useContext(Context)

    const [lang, setLang] = useState("")
  
    useEffect(()=>{
      String(context.locale).includes("en")? setLang("EN"):setLang("ZH")  
    },[context.locale])

    return (
        <>
            <p>
                {lang === "ZH"?
                <div>
                    <p> 
                        我哋一直都有收到反映想有多啲活動，認識多啲朋友。除咗投入本地社會認識本地人之外，仍可以有香港社交圈。特別係一班長者或已退休嘅朋友，平日閒暇時間較多，自然想有更多社交活動。打發時間之餘，又有機會學一啲新事物新體驗。
                    </p>
                    <p>
                        Stockport Hongkongers CIG 計劃搞定期長者活動，不時會響其中加入不同服務同興趣班，等老友有定期聚會同世藝，甚至有機會貢獻俾本地社會。
                    </p>
                </div>
                :
                <div>
                    <p>
                        We have been receiving feedback that people would like to have more activities and make more friends. In addition to getting involved in the local community and meeting local people, we can also have a social circle in Hong Kong. This is especially important for seniors or retired friends who have more free time on weekdays and naturally want to have more social activities. In addition to passing the time, there is also the opportunity to learn new things and have new experiences.
                    </p>
                    <p>
                        The Stockport Hongkongers CIG plans to organize regular activities for seniors, occasionally adding different services and interest classes, so that senior friends can have regular gatherings and enjoy art and culture together, and even have the opportunity to contribute to the local community.
                    </p>
                </div>
                }
            </p>

            <p>
                {lang === "ZH"? 
                "4月11日係我哋第一次長者茶聚。當日大家會飲吓茶/啡，互相認識，大家一齊傾吓之後嘅定期聚會想有咩活動同服務。 （例如我哋打算之後嘅活動安排中醫講解、品茶、NHS健康服務等等。）希望大家躍踴參加，家人亦可以陪同長者出席，教定佢哋以後點樣乘搭交通工具。"
                :
                "On April 11, we held our first senior tea gathering. On that day, everyone gathered for tea/coffee and got to know each other. After discussing and sharing ideas, we planned some activities and services for future gatherings, such as Chinese medicine lectures, tea tastings, and NHS health services. We hope that everyone will participate and that family members can accompany the elderly to the event, teaching them how to take public transportation in the future."}
            </p>
        
            <div>
                <Table striped bordered hover>
                        <tbody>
                            <tr>
                                <td>{lang === "ZH"? "日期：":"Date:"}</td>
                                <td>{lang === "ZH"? "4月11日（星期二）":"April 11th (Tuesday)"}</td>
                            </tr>
                            <tr>
                                <td>{lang === "ZH"? "時間：":"Time:"}</td>
                                <td>{lang === "ZH"? "上午10:30 - 下午12:30 （約兩小時":"10:30 am - 12:30 pm (about two hours)"}</td>
                            </tr>
                            <tr>
                                <td>{lang === "ZH"? "地點：":"Location:"}</td>
                                <td>Edgeley Community Church, Old Chapel Street, Stockport SK3 9NB</td>
                            </tr>
                            <tr>
                                <td>{lang === "ZH"? "費用：":"Fee:"}</td>
                                <td>{lang === "ZH"? "£1 (現場有簡單茶點招待）六歲以下免費":"£1 (simple refreshments will be provided on site), free for children under six years old"}</td>
                            </tr>
                            <tr>
                                <td>{lang === "ZH"? "人數：":"Number of participants:"}</td>
                                <td>30</td>
                            </tr>
                        </tbody>
                </Table>
            </div>
            
            <div className="d-flex justify-content-center">
                <Button onClick={(e)=>{window.open("https://forms.gle/CMkpvv4R5nwRquQA9 ","_blank")}}>
                    {lang === "ZH"? "報名":"Sign up"}
                </Button>
            </div>    

            <p>
                {lang === "ZH"? 
                    "如有查詢，請聯絡我哋Stockport Hongkongers Community Interest Group (Facebook Messenger), WhatsApp 或電郵： stockport.hkers@gmail.com。"
                    :
                    "If you have any inquiries, please contact us through Stockport Hongkongers Community Interest Group (Facebook Messenger), WhatsApp, or email: stockport.hkers@gmail.com."
                }
            </p>

        </>
    )
}

export default Event4description
