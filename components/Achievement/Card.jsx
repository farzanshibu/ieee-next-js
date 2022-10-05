import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import BlockContent from "@sanity/block-content-to-react";

export default function ActionAreaCard(props) {
	return (
		<Card
			sx={{ maxWidth: 345 }}
			style={{
				WebkitBoxShadow: "12px 30px 112px -27px rgba(0,0,0,0.54)",
				MozBoxShadow: "12px 30px 112px -27px rgba(0,0,0,0.54)",
				boxShadow: "12px 30px 112px -27px rgba(0,0,0,0.54)",
			}}
		>
			<CardActionArea>
				{props.image && (
					<CardMedia
						component="img"
						height="140"
						image={props.image}
						alt="green iguana"
					/>
				)}
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{props.title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{props.description ? props.description : ""}
					</Typography>
					<BlockContent blocks={props.body} />
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
