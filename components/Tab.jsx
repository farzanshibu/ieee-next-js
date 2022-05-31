import styles from "../styles/Tab.module.css";
import React from "react";

export const TabItem = (props) => <div {...props} />;

export const Tabs = ({ defaultIndex = 0, onTabClick, children }) => {
	const [bindIndex, setBindIndex] = React.useState(defaultIndex);
	const changeTab = (newIndex) => {
		if (typeof onTabClick === "function") onTabClick(newIndex);
		setBindIndex(newIndex);
	};
	const items = children.filter((item) => item.type.name === "TabItem");

	return (
		<div className="wrapper d-flex flex-column text-center gap-4">
			<div className={`${styles.tabMenu}`}>
				{items.map(({ props: { index, label } }) => (
					<button
						key={`tab-btn-${index}`}
						onClick={() => changeTab(index)}
						className={bindIndex === index ? `${styles.focus}` : ""}
					>
						{label}
					</button>
				))}
			</div>
			<div className="tab-view">
				{items.map(({ props }) => (
					<div
						{...props}
						className={`${styles.tabContent} ${
							bindIndex === props.index ? `${styles.selected}` : ""
						}`}
						key={`${styles.tabContent}-${props.index}`}
					/>
				))}
			</div>
		</div>
	);
};
