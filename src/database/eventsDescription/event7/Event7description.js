import React, {useContext, useState, useEffect} from 'react'
import { Button } from 'react-bootstrap'
import { Context } from '../../../hooks/Wrapper'

export const Event7description = () => {
  
  //const context = useContext(Context)
  const context = useContext(Context)

  const [lang, setLang] = useState("")

  useEffect(()=>{
    String(context.locale).includes("en")? setLang("EN"):setLang("ZH")  
  },[context.locale])

  return (
    <div>
        {lang === "ZH"? 
          <div>
            <p>
                曼城嘅朋友，你鍾唔鍾意行下山、公園或者綠化帶？嚟緊嘅 2023 年 5 月， Hongkongers in Britain 英國港僑協會 將會聯同四個曼城香港人組織（包括 Lightime Cic 、 Salford Hongkongers CIC 、 Stockport Hongkongers - Community interest group 以及 Trafford Hongkongers CIC ），分別喺 Bury、Heaton Park、Marple、Sale 以及 Salford 搞《和你曼遊》步行團，路線詳情請參閱 Eventbrite 網站資料。是次活動歡迎任何人參加。
            </p>

            <p>
                參加者需自備食物及水，並穿著合適裝束（建議背囊、長袖衫、長褲及行山鞋，以免被昆蟲動物叮咬，或被植物刺傷燒傷），亦請帶備合適防曬用品（如帽及/或太陽眼鏡）。
            </p>
          </div>
          :
          <div>
            <p>
                Are you living in Greater Manchester? Do you like hiking, walking through Gardens and green belts? In May 2023, Hongkongers in Britain will coorganise a series of walking tours ‘Greater Manchester Walk’ with four Hongkonger-led organisation in Greater Manchester (including Lightime CIC, Salford HongKongers CIC, Stockport Hongkongers Community Interest Group, and Trafford Hongkongers CIC) in Bury, Heaton Park, Marple, Sale and Salford. Please refer to the details of each route on Eventbrite. This event welcomes everyone.
            </p>

            <p>
                Attendees should prepare their own food and water, dress in suitable clothes (a backpack, clothes with long sleeves, long trousers and shoes for hiking are recommended in order to avoid being bitten by animals and insects, or punctured / burnt by plants). Please also bring along your own sunscreen (i.e.: a hat and/or sunglasses.
            </p>
          </div>
        }


        <p>
          {lang === "ZH"? "日期":"Date"}:
        </p>

        <ul>
          <li>Bury: 2/5/2023 ({lang === "ZH"? "星期二":"Tuesday"})</li> 
          <li>Heaton Park: 9/5/2023 ({lang === "ZH"? "星期二":"Tuesday"})</li>
          <li>Marple: 15/5/2023 ({lang === "ZH"? "星期一":"Monday"})</li>
          <li>Sale: 22/5/2023 ({lang === "ZH"? "星期一":"Monday"})</li>
          <li>Salford: 24/5/2023 ({lang === "ZH"? "星期三":"Wednesday"})</li>
        </ul>

        <p>{lang === "ZH"? "時間":"Time"}:</p>

        <ul>
          <li>10:00 -13:00 ({lang === "ZH"? "英國時間":"UK Time"})</li>
        </ul>

        <p>{lang === "ZH"? "地點":"Venue"}:</p>

        <ul>
          <li>Bury、Heaton Park、Marple、Sale、Salford</li>
        </ul>

        <div className="d-flex justify-content-center">
          <Button onClick={(e)=>{window.open('https://www.eventbrite.co.uk/cc/2062489/', '_blank')}}>
            {lang === "ZH"? "報名":"Sign up"}
          </Button>
        </div>

        <p>{lang === "ZH"? "名額":"Capacity"}:</p>
        <ul>
          <li>
            {lang === "ZH"? "每團 30":"Each Group about 30 people"}
          </li>
        </ul>

        <p>{lang === "ZH"? "截止登記時間":"Deadline for registration"}:</p>
        <ul>
          <li>
            {lang === "ZH"? "請參考 Eventbrite 報名網頁上資料":"Please refer to the information on Eventbrite."}
          </li>
        </ul>

        <p>{lang === "ZH"? "查詢":"Enquiries"}:</p>
        <ul>
          <li>
            Alex Mak 
            {lang === "ZH"? "就業主任暨地區外展主任 ( 英格蘭西北 )":"Employment Coordinator & Regional Outreach Coordinator (Northwest England)"}
          </li>
          <li>alex.mak@hongkongers.org.uk</li>
        </ul> 

        <p>{lang === "ZH"? "協辦":"Co-organiser"}</p>
        <ul>
          <li>Lightime CIC</li>
          <li>Salford HongKongers CIC</li>
          <li>Stockport Hongkongers Community Interest Group</li>
          <li>Trafford HongKongers CIC </li>
        </ul>
        
    </div>
  )
}

export default Event7description