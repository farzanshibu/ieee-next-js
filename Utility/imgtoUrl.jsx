import imageUrlBuilder from "@sanity/image-url";
import Client from "../client";

const builder = imageUrlBuilder(Client);

function urlFor(source) {
	return builder.image(source);
}
export default urlFor;
