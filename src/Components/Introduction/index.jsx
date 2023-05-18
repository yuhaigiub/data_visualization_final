import Collect from "./Components/Collect";
import Preprocessing from "./Components/Preprocessing";
import Relation from "./Components/Relation";

const Introduction = () => {
	return (
		<div>
			<h2>Giới thiệu dữ liệu</h2>
			<Collect />
			<Preprocessing />
			<Relation />
		</div>
	);
};

export default Introduction;
