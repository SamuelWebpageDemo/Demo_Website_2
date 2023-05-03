import { Calendar, dateFnsLocalizer, Views} from "react-big-calendar";
import { AllEvents } from "../../database/EventsData";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';
import { format, parse, startOfWeek, getDay} from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./myCalendar.css";
import React, {useContext, useState, useEffect} from "react";
import { zhHK } from 'date-fns/locale'
import { enUS } from 'date-fns/locale'
import { messagesZH } from "../../lang/calenderZH";
import { Context } from "../../hooks/Wrapper";
import { FormattedMessage } from "react-intl";
import useWIndowSize from "../../hooks/useWIndowSize";
import { Container, Row, Col } from "react-bootstrap";

export const MyCalendar = () => {

	const context = useContext(Context)

	const locales = {
		"en-US": enUS,
		"zh-HK": zhHK
	};

	const localizer = dateFnsLocalizer({
		format,
		parse,
		startOfWeek,
		getDay,
		locales
	});

	const [sidebarContent, setSidebarContent] = useState([])
	const [slot, setSlot] = useState([])
	const [clickDate, setClickDate] = useState(new Date(2023,4,6,0,0,0))
	//hooks for side bar
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false)	
	//hooks for events
	const [myevents, setMyevents] = useState([]);
	const [eventWithTime, setEventWithTime] = useState([])
	//hooks for view
	const [currentView, setCurrentView] = useState(Views.MONTH)

	//turn the All events data object into event data for react-big-calender
	useEffect(() => 
		{
			setMyevents([]);
			//filter event for specific location
			const newEvents = Object.values(AllEvents).filter((x) => 
			{
				return (
					context.location === "app.all" ||
					x.Location === context.location
				);
			}).flatMap((x) => 
			{
				const events = [];
				let startDate = ""
				let endDate = ""
				let interval = 1

				if (x.repeat > 0){
					interval = 7
				} else {
					interval = 1
				}
				

				//loop through events
				for (let i = 0; i < (x.repeat > 0 ? x.repeat : 1); i++) 
					{
						const newStart = x.start.getTime() + (interval * i * 86400000)
						const newEnd = x.end.getTime() + (interval * i * 86400000)

						let eventsDay = Math.round((x.end - x.start)/86400000) + 1
						for (let j = 0; j < (eventsDay > 0 ? eventsDay : 1); j++){

							//calculate start date, when x.start is not in removed date and x.end is empty
							if (!x.removeDate.includes(newStart + (interval * j * 86400000)) && startDate === "" && endDate === ""){
								startDate = newStart + (interval * j * 86400000)
								//console.log("start",x.titleZH, new Date(startDate))
							}
							//calculate end date
							//when the date is in removal array
							
							if(startDate !== "" && endDate === "" && x.removeDate.includes(newStart + (interval * j * 86400000))){
								endDate = newStart + (interval * (j-1) * 86400000)
								//console.log("end1", x.titleZH, new Date(endDate))
							} 
									
							else if (startDate !== "" && endDate === "" && newStart + (interval * j * 86400000) - newEnd === 0 && !x.removeDate.includes(newStart + (interval * j * 86400000))) {
								endDate = newEnd
								//console.log("end2", x.titleZH, new Date(endDate))
							} 
	
	
							//when start date and end date is calculated, then put the result into events. 
							if (startDate !== "" && endDate !== "")
							{
									//events for month view
								events.push
									({
										id: x.id,
										title: String(context.locale).includes("en") ? x.titleEN : x.titleZH,
										description: String(context.locale).includes("en") ? x.descriptionEN : x.descriptionZH,
										fee:String(context.locale).includes("en") ? x.feeEN : x.feeZH,
										Location: x.Location,
										start:new Date(startDate),
										end:new Date(endDate),
										openTime: x.openTime,
										closeTime: x.closeTime,
										img: x.img,
										Address: x.Address,
									})
								//empty start Date and end Date for next calculation
								startDate = ""
								endDate = ""
							}

						}
					}
			

				//for additional date
				if (x.additionalDate.length > 0)
					{
						for (let i = 0; i < x.additionalDate.length; i++)
							{
								events.push({
									id: x.id,
									title: String(context.locale).includes("en") ? x.titleEN : x.titleZH,
									description: String(context.locale).includes("en") ? x.descriptionEN : x.descriptionZH,
									fee:String(context.locale).includes("en") ? x.feeEN : x.feeZH,
									Location: x.Location,
									start: new Date(x.additionalDate[i][0]),
									end:new Date(x.additionalDate[i][1]),
									img: x.img,
									Address: x.Address,
								})
							}
					}
				return events;
			});
			setMyevents((prevEvents) => [...prevEvents, ...newEvents])
	  	}, [context.location, context.locale]
	);


	//create data for day and week view
	useEffect(()=>
		{
			setEventWithTime([])
			const eventsAddTime = Object.values(myevents).flatMap((x,key)=>{
				const eventsTime = []
				const eventsDay = Math.round((x.end - x.start)/86400000)
				for (let j = 0; j < (eventsDay > 0 ? eventsDay : 1); j++){
					//console.log(j, x.id, x.title, x.openTime, x.openTime === undefined)
					let startDate = ""
					let endDate = ""
					if (x.openTime === undefined) {
						startDate = x.start
						endDate = x.end
					} else {
						const [openHours, openMinutes, openSeconds] = x.openTime.split(":").map(Number);
						const [closeHours, closeMinutes, closeSeconds] = x.closeTime.split(":").map(Number);	
						startDate = new Date(x.start.setHours(openHours, openMinutes, openSeconds))
						endDate = new Date(x.end.setHours(closeHours, closeMinutes, closeSeconds))
					}

					eventsTime.push({
						id: x.id,
						title: x.title,
						description: x.description,
						fee: x.fee,
						Location: x.Location,
						start: startDate,
						end: endDate,
						img: x.img,
						Address: x.Address	
					})
				} 
				return(eventsTime)
			})
			setEventWithTime((prevEvents) => [...prevEvents, ...eventsAddTime])
		}
	,[myevents])

	//change the view of calender base on device width
	//get current window size
	const {screenDim} = useWIndowSize();
	//change the calender view base on the calender
	useEffect(()=>{
		if (screenDim.width >= 1000){
			setCurrentView(Views.MONTH)
		}else if (screenDim.width < 1000 && screenDim.width >= 800){
			setCurrentView(Views.WEEK)
		}else if (screenDim.width < 800){
			setCurrentView(Views.DAY)
		}
		},[screenDim.width]
	)

	return(
		<>
		<div className="calendars">
			<div>
				<h1>{<FormattedMessage id={context.location} defaultMessage="Location"/>}</h1>
				
				<Calendar
					messages={String(context.locale).includes("en")? "":messagesZH}
					events={currentView==="month"? myevents:eventWithTime}
					localizer={localizer}
					defaultDate={format(new Date(), "yyyy-MM-dd")}
					defaultView="month"
					view={currentView}
					onView={(newView) => setCurrentView(newView)}
					dayLayoutAlgorithm="no-overlap"
					views={["month", "week","day"]}
					style={{ height: window.innerHeight * 1.2, width: '100%' }}
					culture={String(context.locale).includes("en")? "en-US":"zh-HK"}

					onSelectSlot={(slotInfo) => {
						const { start, end } = slotInfo
						
						const eventsForThisDay = myevents.filter(
							event => ((start - new Date(event.start) >= 0 && new Date(event.end) - end >= 0) || 
							(new Date(event.start) - start >= 0 && end - new Date(event.end) >= 0))
						);
						setSidebarContent(eventsForThisDay)
						setSlot({})
						setShow(true)
						setClickDate(new Date(start))
					}}

					onSelectEvent={(eventInfo)=>{
						setSlot(eventInfo)
						setSidebarContent({})
						setShow(true)
					}}
					selectable
				/>
 
				<div>
					<Offcanvas show={show} onHide={handleClose} scroll={true} backdrop={true}>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title>{String(clickDate)}</Offcanvas.Title>
						</Offcanvas.Header>
						
						<Offcanvas.Body className="p-0">

							{Object.keys(slot).length > 0? 
								// for slot information
								<div>
									<Accordion>
										<Accordion.Item eventKey={0}>
											<Accordion.Header>{slot.title}</Accordion.Header>
											<Accordion.Body className="p-0 pt-2">
												<Container>
													<Row>
														<Col>
															<img src={slot.img} alt={slot.title}/>
														</Col>
													</Row>
													<Row>
														<Col>
															<FormattedMessage id="app.description" defaultMessage="Description"/>
														</Col>
													</Row>
													<Row>
														<Col>	
															{slot.description}
														</Col>
													</Row>
													<Row>
														<Col>
															<FormattedMessage id="app.fee" defaultMessage="Fee"/>
														</Col>
													</Row>
													<Row>
														<Col>
															{slot.fee}
														</Col>
													</Row>
												</Container>
											</Accordion.Body>
										</Accordion.Item>
									</Accordion>
								</div>
							:
								//for the event of the day
								Object.values(sidebarContent).map((x, key)=>
									<div>
										<Accordion>
											<Accordion.Item eventKey={key}>
												<Accordion.Header>{x.title}</Accordion.Header>
												<Accordion.Body className="p-0 pt-2">
													<Container>
														<Row>
															<Col>
																<img src={x.img} alt={x.title}/>
															</Col>
														</Row>
														<Row>
															<Col>
																<FormattedMessage id="app.description" defaultMessage="Description"/>
															</Col>
														</Row>
														<Row>
															<Col>	
																{x.description}
															</Col>
														</Row>
														<Row>
															<Col>
																<FormattedMessage id="app.fee" defaultMessage="Fee"/>
															</Col>
														</Row>
														<Row>
															<Col>
																{x.fee}
															</Col>
														</Row>
													</Container>
												</Accordion.Body>
											</Accordion.Item>	
										</Accordion>
									</div>
							    )
							}
						</Offcanvas.Body>
						
					</Offcanvas>
				</div>
			</div>
		</div>
	</>
	)
};

