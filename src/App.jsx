import {
	DebtAndInvestment,
	ExportAndImport,
	General,
	Inflation,
	MachineLearning,
	Unemployment,
	Solution,
	Introduction,
} from "./Components/_index";

import Navbar from "./Components/Navbar";

function App() {
	return (
		<div className="grid grid-cols-[3fr_7fr]">
			<Navbar />
			<div className="flex flex-col gap-16 px-24 pt-24 pb-48">
				<Introduction />
				<General />
				<Unemployment />
				<Inflation />
				<MachineLearning />
				<ExportAndImport />
				<DebtAndInvestment />
				<Solution />
			</div>
		</div>
	);
}

export default App;
