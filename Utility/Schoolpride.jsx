import { useCallback, useEffect, useRef, useState } from "react";

function getAnimationSettings(angle, originX) {
	var myArray = ["#01a4cd", "#dddddd", "#eeff01", "#fe3ea5"];
	var randomItem1 = myArray[Math.floor(Math.random() * myArray.length)];
	var randomItem2 = myArray[Math.floor(Math.random() * myArray.length)];
	var colors = [randomItem2, randomItem1];
	return {
		particleCount: 3,
		angle,
		spread: 55,
		origin: { x: originX, zIndex: 1500 },
		colors: colors,
	};
}
const canvasStyles = {
	position: "fixed",
	pointerEvents: "none",
	width: "100%",
	height: "100%",
	top: 0,
	left: 0,
};
export default function SchoolPride() {
	const refAnimationInstance = useRef(null);
	const [intervalId, setIntervalId] = useState();

	const getInstance = useCallback((instance) => {
		refAnimationInstance.current = instance;
	}, []);

	const nextTickAnimation = useCallback(() => {
		if (refAnimationInstance.current) {
			refAnimationInstance.current(getAnimationSettings(60, 0));
			refAnimationInstance.current(getAnimationSettings(120, 1));
		}
	}, []);

	const startAnimation = useCallback(() => {
		if (!intervalId) {
			setIntervalId(setInterval(nextTickAnimation, 16));
		}
	}, [nextTickAnimation, intervalId]);

	const pauseAnimation = useCallback(() => {
		clearInterval(intervalId);
		setIntervalId(null);
	}, [intervalId]);

	useEffect(() => {
		setTimeout(() => {
			pauseAnimation();
		}, 5000);
		return () => {
			clearInterval(intervalId);
		};
	}, [intervalId, pauseAnimation]);

	return [startAnimation, getInstance, canvasStyles];
}
