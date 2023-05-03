import { AllEvents } from "../../../database/EventsData"

export const ChurchEvents = //() =>{ 

    AllEvents.map((x,key)=>(
        {
            id:x.id, 
            img: x.img,
        }
    ))
//}

 

