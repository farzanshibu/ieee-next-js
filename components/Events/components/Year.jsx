import Link from "next/link";
import Event from "./Event";
import urlFor from "../../imgtoUrl";

function Year(props) {
	const events = Object.values(props);
	return (
		<div className="product">
			<div className="row w-100">
				{events.map((event) => (
					<div key={event._id} className="col-md-4 p-2">
						{event.slug?.current ? (
							<Link href={`/events/${event.slug?.current}`}>
								<a>
									<Event
										Title={event?.title}
										Description={event?.shortDesignation}
										Image={
											event.image
												? urlFor(event.image).format("webp").url()
												: ""
										}
										DateandTime={event?.date}
										SpeakerName={
											event.speakers ? event.speakers[0].speakerName : ""
										}
										SpeakerDesingation={
											event.speakers ? event.speakers[0].speakerName : ""
										}
									/>
								</a>
							</Link>
						) : (
							""
						)}
					</div>
				))}
			</div>
		</div>
	);
}

export default Year;
