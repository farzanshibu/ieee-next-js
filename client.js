import sanityClient from "@sanity/client";

const Client = sanityClient({
	projectId: "0x6yp0d6",
	dataset: "production",
	useCdn: true,
	apiVersion: "v2021-10-21",
});
export default Client;
