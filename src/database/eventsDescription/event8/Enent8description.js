import React, {useContext, useState, useEffect} from 'react'
import { Button } from 'react-bootstrap'
import { Context } from '../../../hooks/Wrapper'

const Enent8description = () => {

    const context = useContext(Context)

    const [lang, setLang] = useState("")
  
    useEffect(()=>{
      String(context.locale).includes("en")? setLang("EN"):setLang("ZH")  
    },[context.locale])
  

    return (
        <div>
            {lang === "ZH"? 
            <div>
                <p>住曼城而又搵緊工嘅朋友留意</p>
                <p>英國政府負責英格蘭西北 Hong Kong Welcome Hub (簡稱 RSMP)，將會同 Hongkongers in Britain 英國港僑協會 以及 Trafford Hongkongers CIC 合作，透過問答環節及工作坊，協助曼城香港人投身英國就業市場。如果你英語能力 ok，請即上 Eventbrite 度報名。</p>
            </div>
            :
            <div>
                <p>Attention to friends who live in Manchester and are looking for work. </p>
                <p>The UK government's responsible organization for the Hong Kong Welcome Hub in the Northwest of England (RSMP) will collaborate with the Hongkongers in Britain Association and Trafford Hongkongers CIC to assist Hong Kong people in Manchester to enter the UK job market through Q&A sessions and workshops. If you have good English language skills, please register on Eventbrite now.</p>
            </div>
            }

            <div className="d-flex justify-content-center">
                <Button onClick={(e)=>{window.open('https://www.eventbrite.co.uk/e/623599531987', '_blank')}}>
                    {lang === "ZH"? "報名":"Sign up"}
                </Button>
            </div>
            
            <p>{lang === "ZH"?"語言：英語":"Language: English"}</p>
            <p>{lang === "ZH"? "工作坊內容包括":"Workshop contents include"}</p>
            <ol>
                {lang === "ZH"? 
                <div>
                    <li>
                        這是一個早晨的會議，旨在了解 BN(O) 在尋找工作方面面臨的障礙，他們正在尋找什麼工作，以及我們可以做些什麼來支持他們，同時還要直接聽取香港人在英國尋找工作方面的經驗。
                    </li>
                    <li>
                        本次會議還將概述一些當前的空缺，並講解香港人如何申請這些職位，包括申請，面試問題以及如何最好地申請工作。
                    </li>
                    <li>
                        本次會議將由一名經驗豐富的就業支援工作者主持，他將收集與會者的詳細信息，以便在未來有空缺時聯繫他們。此外，會議還會為非就業相關問題提供空間進行提問。
                    </li>
                    <li>
                        會提供食品和茶點。
                    </li>
                    <li>
                        報名要求：必須目前正在尋找工作（無論目前是否失業，只要正在尋找其他工作均可），必須具備基本的英語理解能力並能夠用英語交談（基本英語技能可接受，但必須能夠理解討論內容而不需要翻譯），必須能夠前往 Trafford Sale。
                    </li>
                </div>
                :
                <div>
                    <li>
                        This is a morning sessions which seeks to understand the barriers BN(O)s are facing in finding employment, what work they are looking for and what we can do to support them, as well as hear directly from Hong Kongers on their experiences in searching for jobs in the UK.
                    </li>
                    <li>
                        The session will also outline a number current open vacancies and talk through how a Hongkonger could apply for them, covering applications, interview questions, and how to best apply for a role.
                    </li>
                    <li>
                        The session will be facilitated by an experienced employment support worker who will take their details for any future vacancies that arise and will also allow space for questions to the Welcome Hub on non-employment related issues.
                    </li>
                    <li>
                        Food and refreshments will be provided.
                    </li>
                    <li>
                        Requirements to register: Must be currently seeking employment (both currently unemployed or employed and seeking other work), must have a reasonable understanding of English and be able to converse in English (basic English skills are fine, but must be able to understand discussion without translation), must be able to travel to Sale, Trafford.
                    </li>
                </div>
                }
            </ol>
    
            {lang === "ZH"? 
                <p>是次工作坊並非唯一一次，如錯失機會，可以 follow RSMP 嘅 RSMP 嘅 Eventbrite page 以獲得最新消息。英國港僑協會以及 Trafford Hongkongers CIC 亦會協助發佈有關消息。</p>
            :
                <p>This workshop is not the only one. If you miss this opportunity, you can follow RSMP's Eventbrite page to get the latest updates. The United Kingdom Hong Kongers Association and Trafford Hongkongers CIC will also help disseminate relevant information.</p>
            }
        
        </div>
    )
}

export default Enent8description
