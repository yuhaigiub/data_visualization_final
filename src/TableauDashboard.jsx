import { useRef, useEffect } from "react";
const { tableau } = window;

const TableauDashboard = ({ url }) => {
	const ref = useRef(null);

	useEffect(() => {
		const viz = new tableau.Viz(ref.current, url);
	}, [url]);

	return <div ref={ref} style={{ width: "100%", aspectRatio: "16/9" }} />;
};

export default TableauDashboard;
