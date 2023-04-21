import {ContactAddress} from "./ContactData"

import act1 from "../pic/mainpage/activaties/1.webp"
import act2 from "../pic/mainpage/activaties/2.jpg"
import act3 from "../pic/mainpage/activaties/3.jpg"
import act4 from "../pic/mainpage/activaties/4.jpg"
import act5 from "../pic/mainpage/activaties/5.jpg"
import act6 from "../pic/mainpage/activaties/6.jpg"
import act7 from "../pic/mainpage/activaties/7.jpg"
import act8 from "../pic/mainpage/activaties/8.jpg"

const ManChurch 	= Object.values(ContactAddress).find(ContactAddress => ContactAddress.name === "Manchester").address
const LondonChurch 	= Object.values(ContactAddress).find(ContactAddress => ContactAddress.name === "London").address
const BirminChurch 	= Object.values(ContactAddress).find(ContactAddress => ContactAddress.name === "Birmingham").address
const BrisChurch 	= Object.values(ContactAddress).find(ContactAddress => ContactAddress.name === "Bristol").address
				
export const AllEvents= [
	{
		id: 1,
		titleEN: "Exhibition - Revolution in process",
		titleZH: "展覽 - 革命，進行中‧亞洲人權藝術展",
		descriptionEN:"description",
		descriptionZH:"橫跨泰國、緬甸、香港三地，在同一時空下，整整一代的平凡人選擇了一條不平凡的自由之路: 革命。縱使，近日社會運動有所緩和，革命之火卻從未熄滅。",
		Location: "app.birmingham",
		start: new Date("2023-8-26"),
		end: new Date("2023-8-31"),
		openTime:<div>
					<p>Monday to Wednesday 10:00AM ~ 7:00PM</p>
					<p>Friday to SAturday 10:00AM ~ 7:00PM</p>
					<p>Sunday 10:00AM ~ 5:00PM</p>
				</div>,
		img:act1,
		Address: <div>
					<p>English Studio</p>
					<p>Midlands Arts Center</p>
					<p>Birmingham</p>
					<p>United Kingdom</p>
					<p>B12 9QH</p>
				</div>,
		feeEN: "Free of charge",
		feeZH: "免費",
		repeat:0,
		interval:0,
	},
	{
		id: 2,
		titleEN: "Survey",
		titleZH: "Survey",
		descriptionEN:"",
		descriptionZH:"",
		Location: "app.bristol",
		start: new Date("2023-4-22"),
		end: new Date("2023-4-23"),
		openTime:"8:30PM until Close",
		img:act2,
		Address: BrisChurch,
		feeEN: "Free of charge",
		feeZH: "免費",
		repeat:100,
		interval:7,
	},
	{
		id: 3,
		titleEN: "Chinese Learning Class",
		titleZH: "",
		descriptionEN:"Learning chinese word and cantonese",
		descriptionZH:"",
		Location: "app.birmingham",
		start: new Date("2023-4-16"),
		end: new Date("2023-6-25"),
		openTime:"3:00PM ~ 4:30PM",
		img:act3,
		Address: BirminChurch,
		feeEN: "30 pound",
		feeZH: "免費",
		repeat:9,
		interval:7,
	},
	{
		id: 4,
		titleEN: "Chinese Learning Class",
		titleZH: "",
		descriptionEN:"Learning chinese word and cantonese",
		descriptionZH:"",
		Location: "app.bristol",
		start: new Date("2023-4-25"),
		end: new Date("2023-4-26"),
		openTime:"6:00PM ~ 10:00PM",
		img:act4,
		Address: BrisChurch,
		feeEN: "Free of charge",
		feeZH: "免費",
		repeat:0,
		interval:0,
	},
	{
		id: 8,
		titleEN: "Chill Space",
		titleZH: "青年空間",
		descriptionEN:"Having dinner together and chat with each other",
		descriptionZH:"一起吃飯聊天",
		Location: "app.manchester",
		start: new Date("2023-4-3"),
		end: new Date("2023-4-3"),
		openTime:"11:00PM ~ 3:00AM (Next day)",
		img:act8,
		Address: ManChurch,
		feeEN: "3 pounds per person, 1 pound for refugee",
		feeZH: "每人 3 英鎊，難民 1 英鎊",
		repeat:6,
		interval:7,
	}
];
