import {ContactAddress} from "./ContactData"

import act1 from "../pic/mainpage/activaties/1.jpg"
import act2 from "../pic/mainpage/activaties/2.jpg"
import act3 from "../pic/mainpage/activaties/3.jpg"
import act4 from "../pic/mainpage/activaties/4.jpg"
import act5 from "../pic/mainpage/activaties/5.jpg"
import act6 from "../pic/mainpage/activaties/6.jpg"
import act7 from "../pic/mainpage/activaties/7.jpg"
import act8 from "../pic/mainpage/activaties/8.jpg"

import Event1description from "./eventsDescription/event1/Event1description"
import Event2description from "./eventsDescription/event2/Event2description"
import Event3description from "./eventsDescription/event3/Event3description"
import Event4description from "./eventsDescription/event4/Event4description"
import Event5Descripton from "./eventsDescription/event5/Event5Descripton"
import Event6description from "./eventsDescription/event6/Event6description"
import Event7description from "./eventsDescription/event7/Event7description"
import Enent8description from "./eventsDescription/event8/Enent8description"


export const AllEvents= [
	{
		id: 1,
		titleEN: "Story telling",
		titleZH: "跟你「港」故仔",
		descriptionEN:<Event1description/>,
		descriptionZH:<Event1description/>,
		Location: "app.london",
		start: new Date("2023-04-30"),
		end: new Date("2023-04-30"),
		openTime:"16:00:00",
		closeTime:"17:30:00",
		repeat:0,
		removeDate:[],
		additionalDate:[["2023-05-07 16:00:00", "2023-05-77 17:30:00"]],
		img:act1,
		Address: <div>
					<p>Room Riverside 1,</p>
					<p>Guildford Baptist Church</p> 
					<p>Millmead</p>
					<p>GU2 4AZ</p>
				</div>,
		feeEN: "£5 per household",
		feeZH: "每家庭 £5",

	},
	{
		id: 2,
		titleEN: "Life in the UK Studying Group",
		titleZH: "Life in the Uk 茶聚溫習班",
		descriptionEN:<Event2description/>,
		descriptionZH:<Event2description/>,
		Location: "app.manchester",
		start: new Date("2023-4-29"),
		end: new Date("2023-4-29"),
		openTime:"10:00:00",
		closeTime:"11:30:00",
		repeat:5,
		removeDate:[new Date("2023-5-06").getTime()],
		additionalDate:[],
		img:act2,
		Address: <div>
					<p>Rawlab 73 Trafalgar St</p>
					<p>Brighton</p>
					<p>Brighton and Hove</p>
					<p>Brighton</p>
					<p>BN1 4EB</p>
				</div>,
		feeEN: "Free of charge",
		feeZH: "免費"
	},
	{
		id: 3,
		titleEN: "Charity Sale",
		titleZH: "義賣籌款",
		descriptionEN:<Event3description/>,
		descriptionZH:<Event3description/>,
		Location: "app.birmingham",
		start: new Date("2023-03-04"),
		end: new Date("2023-03-04"),
		openTime:"13:00:00",
		closeTime:"17:00:00",
		repeat:0,
		removeDate:[],
		additionalDate:[["2023-03-05 10:00:00", "2023-03-05 14:00:00"]],
		img:act3,
		Address: <div>
					<p>St Augustine'2 Catholic Church</p>
					<p>1 Herbert Road</p>
					<p>Solihull</p>
					<p>Birmingham</p>
					<p>B91 3QE</p>
				</div>,
		feeEN: "Free of charge",
		feeZH: "免費"
	},
	{
		id: 4,
		titleEN: "Elderly Gathering",
		titleZH: "【老友記聚會樂FUN FUN】",
		descriptionEN:<Event4description/>,
		descriptionZH:<Event4description/>,
		Location: "app.manchester",
		start: new Date("2023-4-11"),
		end: new Date("2023-4-11"),
		openTime:"10:30:00",
		closeTime:"12:30:00",
		repeat:0,
		removeDate:[],
		additionalDate:[],
		img:act4,
		Address: <div>
					<p>Edgeley Community Church</p>
					<p>Old Chapel Street</p>
					<p>Stockport</p>
					<p>SK3 9NB</p>
				</div>,
		feeEN: "F£1 (simple refreshments will be provided on site). Children under six years old are free of charge.",
		feeZH: "£1 (現場有簡單茶點招待）六歲以下免費"
	},
	{
		id: 5,
		titleEN: "Job Information Session for Hongkongers",
		titleZH: "香港人就業資訊會",
		descriptionEN:<Event5Descripton/>,
		descriptionZH:<Event5Descripton/>,
		Location: "app.manchester",
		start: new Date("2023-3-17"),
		end: new Date("2023-3-17"),
		openTime:"11:00:00",
		closeTime:"12:30:00",
		repeat:0,
		removeDate:[],
		additionalDate:[],
		img:act5,
		Address: <div>
					<p>First House</p>
					<p>Brinnington</p>
					<p>SK5 8EN</p>
				</div>,
		feeEN: "Free of charge",
		feeZH: "免費"
	},
	{
		id: 6,
		titleEN: "3rd drama and Acting Introductory Workshop",
		titleZH: "戲劇及演技入門工作坊3",
		descriptionEN: <Event6description/>,
		descriptionZH: <Event6description/>,
		Location: "app.manchester",
		start: new Date("2023-4-3"),
		end: new Date("2023-4-3"),
		openTime:"17:00:00",
		closeTime:"22:00:00",
		repeat:0,
		removeDate:[],
		additionalDate:[["2023-4-5 17:00:00", "2023-4-5 22:00:00"]],
		img:act6,
		Address: <div>
					<p>Salvation Army Manchester Central</p>
					<p>71 Grosvenor Street</p> 
					<p>Manchester</p>
					<p>M13 9UB</p>
					<p>United Kingdom</p>
				</div>,
		feeEN: "Free of charge",
		feeZH: "免費"
	},
	{
		id: 7,
		titleEN: "Hiking - Greater Manchester Walk",
		titleZH: "行山 - 和你曼遊",
		descriptionEN:<Event7description/>,
		descriptionZH:<Event7description/>,
		Location: "app.manchester",
		start: new Date("2023-05-02"),
		end: new Date("2023-05-02"),
		openTime:"10:00:00",
		closeTime:"13:00:00",
		repeat:0,
		removeDate:[],
		additionalDate:[["2023-05-09 10:00:00", "2023-05-09 13:00:00"],
						["2023-05-15 10:00:00", "2023-05-15 13:00:00"],
						["2023-05-22 10:00:00", "2023-05-22 13:00:00"],
						["2023-05-24 10:00:00", "2023-05-24 13:00:00"]
						],
		img:act7,
		Address: "Bury、Heaton Park、Marple、Sale、Salford",
		feeEN: "Free of charge",
		feeZH: "免費"
	},
	{
		id: 8,
		titleEN:"Trafford Employment Discussion Group And Workshop",
		titleZH:"搵緊talk",
		descriptionEN:<Enent8description/>,
		descriptionZH:<Enent8description/>,
		Location:"app.manchester",
		start:new Date("2023-05-10"),
		end:new Date("2023-05-10"),
		openTime:"10:00:00",
		closeTime:"12:00:00",
		repeat:0,
		removeDate:[],
		additionalDate:[],
		img:act8,
		Address: "Sale city center, Stanley Square, Hiya (M33 7ZZ)",
		feeEN: "Free of charge",
		feeZH: "免費"
	}
];
