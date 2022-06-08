import Team from "./Team";
import urlFor from "../../imgtoUrl";

function PES(props) {
	const members = Object.values(props);
	return (
		<>
			{members.map((member) => (
				<Team
					key={member._id}
					Name={member.name}
					Image={urlFor(member.image).auto("format").url()}
					Designation={member.designation}
					facebook={member.facebook}
					instagram={member.instagram}
					linkedin={member.linkedin}
				/>
			))}
		</>
	);
}

export default PES;
