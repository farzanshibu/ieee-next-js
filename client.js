import sanityClient from "@sanity/client";

const Client = sanityClient({
	projectId: "d19epmzn", // you can find this in sanity.json
	dataset: "production", // or the name you chose in step 1
	useCdn: true, // `false` if you want to ensure fresh data
});
export default Client;
