import React, {useContext, useState, useEffect} from 'react'
import { Button } from 'react-bootstrap'
import { Context } from '../../../hooks/Wrapper'

const Event6description = () => {
    const context = useContext(Context)

    const [lang, setLang] = useState("")
  
    useEffect(()=>{
      String(context.locale).includes("en")? setLang("EN"):setLang("ZH")  
    },[context.locale])
  
    return (
        <div>
            {lang === "ZH"? "粵語授課":"Cantonese Lesson"}
            {lang === "ZH"? 
                <div>
                    <p>戲劇及演技入門工作坊3」最後召集！</p>
                    <p>呢個星期嘅工作坊內容: 第一小時 劇場遊戲及形體訓練、第二小時 聲音及歌唱技巧訓練、第三小時 劇本團讀及演技訓練。</p>
                    <p>名額有限，仲唔快啲報名？</p>
                </div>
            :
                <div>
                    <p>Last Order of Cantonese Drama Workshop!</p>
                    <p>This week's workshop content: First hour - theater games and physical training, second hour - voice and singing skills training, third hour - script reading and acting training.</p>
                    <p>Limited places available, why not sign up quickly?</p>
                </div>
            }
        
            <div className="d-flex justify-content-center">
                <Button onClick={(e)=>{window.open('https://www.eventbrite.co.uk/e/3-3th-drama-and-acting-introductory-workshop-tickets-606523166117?fbclid=IwAR0aowyDdByO1-csTu0y9ipHWg8-50OQSxLgMR5o7AN5W2MEJWZq90Y7jHA', '_blank')}}>
                    {lang === "ZH"? "報名":"Sign up"}
                </Button>
            </div>
         
            <div>
                {lang === "ZH"? "歡迎12歲或以上人士參加":"Individuals aged 12 or above are welcome to participate"}
            </div>
        
        
            <div>
                {lang === "ZH"?
                    <div>
                        <p>
                            透過形體、發聲、咬字、劇本分析、角色探討以及演技訓練，由遊戲到理論再到實踐，讓你成為一名專業嘅表演者。適合有意磨練演技、成為演員、探索戲劇藝術或發掘自己可能性嘅你參與。                
                        </p>
                        <p>
                            如有任何查詢，歡迎電郵聯絡我哋㗎! lightimecic@gmail.com
                        </p>
                    </div>
                    :
                    <div>
                        <p>
                            Through physical training, vocal exercises, diction practice, script analysis, character exploration, and acting techniques, our workshop takes you on a journey from games to theory to practical application, transforming you into a professional performer. It is suitable for those interested in refining their acting skills, pursuing an acting career, exploring the art of drama, or discovering their own potential. 
                        </p>
                        <p>
                            For any inquiries, please do not hesitate to contact us via email at lightimecic@gmail.com
                        </p>
                    </div>
                }
            </div>
        </div>
    )
}

export default Event6description
