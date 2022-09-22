import Team from "./Team";
import urlFor from "../../imgtoUrl";

function EMBS(props) {
	const members = Object.values(props);
	return (
		<>
			{members.map((member) => (
				<Team
					key={member._id}
					Name={member.name}
					Image={member.image ? urlFor(member.image).auto("format").url() : ""}
					Designation={member.designation}
					facebook={member?.facebook}
					instagram={member?.instagram}
					linkedin={member?.linkedin}
				/>
			))}
		</>
	);
}

export default EMBS;
