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
		<div className="pt-24 pb-48 pr-36 grid grid-cols-[3fr_7fr] gap-12">
			<Navbar />
			<div className="flex flex-col gap-16">
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
