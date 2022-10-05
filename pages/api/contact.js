// const contact = (req, res) => {
// 	const body = JSON.parse(req.body);
// 	console.log(body);
// 	res.status(200).json({ status: "OK" });
// };

// export default contact;

const { Client } = require("@notionhq/client");

const notion = new Client({
	auth: process.env.NOTION_API_KEY,
});

export default async function Contact(req, res) {
	if (req.method !== "POST") {
		return res
			.status(405)
			.json({ message: `${req.method} requests are not allowed` });
	}
	try {
		const { name, email, subject, message } = JSON.parse(req.body);
		await notion.pages.create({
			parent: {
				database_id: process.env.NOTION_DATABASE_ID,
			},
			properties: {
				Name: {
					title: [
						{
							text: {
								content: name,
							},
						},
					],
				},
				Email: {
					email: email,
				},
				Subject: {
					rich_text: [
						{
							text: {
								content: subject,
							},
						},
					],
				},
				Message: {
					rich_text: [
						{
							text: {
								content: message,
							},
						},
					],
				},
			},
		});
		res.status(201).json({ msg: "Success" });
	} catch (error) {
		res.status(500).json({ msg: "There was an error" });
	}
}
