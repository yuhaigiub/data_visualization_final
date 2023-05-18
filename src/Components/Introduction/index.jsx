import Collect from "./Components/Collect";
import Preprocessing from "./Components/Preprocessing";
import Relation from "./Components/Relation";

const Introduction = () => {
	return (
		<div>
			<h2 id="introduction">Giới thiệu dữ liệu</h2>
			<div className="flex flex-col gap-8">
				<Collect />
				<Preprocessing />
				<Relation />
			</div>
		</div>
	);
};

export default Introduction;
