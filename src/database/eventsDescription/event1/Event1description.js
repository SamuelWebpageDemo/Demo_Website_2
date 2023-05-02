import React, {useContext, useState, useEffect} from 'react'
import { Button } from 'react-bootstrap'
import { Context } from '../../../hooks/Wrapper'
import Table from 'react-bootstrap/Table'

const Event1description = () => {

    const context = useContext(Context)

    const [lang, setLang] = useState("")
  
    useEffect(()=>{
      String(context.locale).includes("en")? setLang("EN"):setLang("ZH")  
    },[context.locale])

    return (
        <div>
            {lang === "ZH"?
            <p>為鼓勵小朋友培養自小閲讀中文圖書習慣，香港人文化社推動親子閲讀會，讓家長可以透過示範與小朋友共讀，從中可享受閲讀嘅樂趣、認識中文字、增進親子關係。</p>
            :
            <p>To encourage children to develop a habit of reading Chinese books from a young age, the Hong Kong Cultural Society is promoting parent-child reading workshops. Parents can participate in reading together with their children through demonstration, enjoying the fun of reading, recognizing Chinese characters, and improving parent-child relationships.</p>
            }

            {lang === "ZH"?
            <p>今次活動，我哋邀請了香港中文老師巴士姨姨(Bess)同我哋講故仔，仲有小手工活動，圖書分享等。 節目咁精彩，點少得你，活動兩節係有關聯嫁，建議一同報曬兩節，但如報一節亦可，名額有限，快啲報名喇!</p>
            :
            <p>For this event, we have invited the Hong Kong Chinese teacher, "Bess," to tell stories and conduct small handicraft activities and book sharing. The program is so exciting, and the two sessions are related to each other. It is recommended to sign up for both sessions together, but you can also sign up for one session only. Seats are limited, so hurry up and register!</p>
            }
            <div>
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <td>{lang === "ZH"? "參加對象":"Target audience"}</td>
                            <td>{lang === "ZH"? "3 – 7 歲小朋友(連同一名家長)":"Children aged 3-7 (with one parent)"}</td>
                        </tr>
                        <tr>
                            <td>{lang === "ZH"? "活動日期:":"Event dates:"}</td>
                            <td>{lang === "ZH"? "30/4 (日)、7/5 (日)":"30/4 (Sun), 7/5 (Sun)"}</td>
                        </tr>
                        <tr>
                            <td>{lang === "ZH"? "活動時間:":"Event time:"}</td>
                            <td>{lang === "ZH"? "下午 4:00 – 5:30pm":"4:00 - 5:30 pm"}</td>
                        </tr>
                        <tr>
                            <td>{lang === "ZH"? "活動費用:":"Event fee"}</td>
                            <td>{lang === "ZH"? "每家庭 £5*(一或兩節同價)":"£5 per family* (one or two sessions are the same price)"}</td>
                        </tr>
                        <tr>
                            <td>{lang === "ZH"? "活動地點:":"Location: "}</td>
                            <td>Room Riverside 1, Guildford Baptist Church Millmead GU2 4AZ</td>    
                        </tr>
                        <tr>
                            <td>{lang === "ZH"? "報名時間:":"Registration period:"}</td>    
                            <td>{lang === "ZH"? "22/4 前，填寫 Google Form 報名":"before 22/4, fill in the Google Form to register"}</td>
                        </tr>
                        <tr>
                            <td>{lang === "ZH"? "特別事項:":"Registration period:"}</td>   
                            <td>{lang === "ZH"? "鼓勵小朋友帶一本喜愛嘅圖書與大家一同分享":"Encourage children to bring a favorite picture book to share with everyone."}</td> 
                        </tr>                        
                    </tbody>
                </Table>
            </div>

            <div className="d-flex justify-content-center">
                <Button onClick={(e)=>{window.open('https://docs.google.com/forms/d/e/1FAIpQLSdEF_MqWd9pRbaFXp47-FU761TSClknB1cJM9-Wk7zVEjJfnA/viewform?fbclid=IwAR23oU6KMAycT2Zt9ZAueRzMgg8FHO9lDXXFstadnmJQ0SEzD5RlNBnxZX4', '_blank')}}>
                    {lang === "ZH"? "報名":"Sign up"}
                </Button>
            </div>

            <p>{lang === "ZH"? "*此活動屬非牟利，收費用作購買手工材料，多出的資金會全數捐贈教會，以感謝其無償提供活動場地":"*This event is non-profit. The fee is used to purchase handicraft materials, and any excess funds will be donated to the church to thank them for providing the venue for free."}</p>

            <p>{lang === "ZH"? "備註：":"Notes:"}</p>
            <ol>
                <li>{lang === "ZH"? "課堂的完成時間，會因應當天情況而有機會提早或延遲，但一般不會多於15分鐘":"The completion time of the class may be earlier or delayed depending on the situation of the day, but it will generally not exceed 15 minutes;"}</li>
                <li>{lang === "ZH"? "『HKCS』當日會影相及拍影片，有機會作日後宣傳之用":'"HKCS" will take photos and videos on the day, which may be used for promotion in the future'}</li>
                <li>{lang === "ZH"? "請參加者遵守埸地義工指示，放限制範圍內活動，勿作出影響場地運作的行為":"Participants should follow the instructions of the venue volunteers, stay within the restricted area, and not engage in any behavior that affects the venue's operation."}</li>
            </ol>

        </div>
    )
}

export default Event1description
