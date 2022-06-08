import sanityClient from "@sanity/client";

const Client = sanityClient({
	projectId: "5rt0wm1l",
	dataset: "production",
	useCdn: true,
	apiVersion: "v2021-10-21",
});
export default Client;
