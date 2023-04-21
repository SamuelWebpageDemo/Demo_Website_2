import { Calendar, dateFnsLocalizer } from "react-big-calendar";
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

	
	const [myevents, setMyevents] = useState([]);

	useEffect(() => {
		setMyevents([]);
		const newEvents = Object.values(AllEvents).filter((x) => {
			return (
				context.location === "app.all" ||
				x.Location === context.location
			);
		}).flatMap((x) => {
			const events = [];
			if (x.repeat > 0) {
				for (let i = 0; i <= x.repeat; i++) {
					console.log(x.id, new Date(x.start.getTime()+ x.interval * i * 86400000))
					events.push({
						id: x.id,
						title: String(context.locale).includes("en") ? x.titleEN : x.titleZH,
						description: String(context.locale).includes("en") ? x.descriptionEN : x.descriptionZH,
						fee:String(context.locale).includes("en") ? x.feeEN : x.feeZH,
						Location: x.Location,
						start: new Date(x.start.getTime()+ x.interval * i * 86400000),
						end:new Date(x.end.getTime()+ x.interval * i * 86400000),
						openTime: x.openTime,
						img: x.img,
						Address: x.Address,
					});
				}
			} else {
					events.push({
					id: x.id,
					title: String(context.locale).includes("en") ? x.titleEN : x.titleZH,
					description: String(context.locale).includes("en") ? x.descriptionEN : x.descriptionZH,
					fee:String(context.locale).includes("en") ? x.feeEN : x.feeZH,
					Location: x.Location,
					start: x.start,
					end: x.end,
					openTime: x.openTime,
					img: x.img,
					Address: x.Address,
				});
			}
			return events;
		});
		setMyevents((prevEvents) => [...prevEvents, ...newEvents]);
	  	}, [context.location, context.locale]
	);

	//**************************************************************************** */

	return(
		<>
		<div className="calendars">
			<div>
				<h1>{<FormattedMessage id={context.location} defaultMessage="Location"/>}</h1>
				<Calendar
					messages={String(context.locale).includes("en")? "":messagesZH}
					events={myevents}
					localizer={localizer}
					defaultDate={format(new Date(), "yyyy-MM-dd")}
					defaultView="month"
					dayLayoutAlgorithm="no-overlap"
					views={['month']}
					//********************* */
					style={{ height: window.innerHeight*2, width: '100%' }}
					culture={String(context.locale).includes("en")? "en-US":"zh-HK"}

					onSelectSlot={(slotInfo) => {
						const { start, end } = slotInfo
						const eventsForThisDay = myevents.filter(
							event => (start - new Date(event.start) >= 0 && new Date(event.end) - end >= 0)
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

						<Offcanvas.Body>

							{Object.keys(slot).length > 0? 
								// for slot information
								<div>
									<Accordion>
										<Accordion.Item eventKey={0}>
											<Accordion.Header>{slot.title}</Accordion.Header>
											<Accordion.Body>
												{slot.description}
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
												<Accordion.Body>
													{x.description}
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

