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

function App() {
	return (
		<div className="pr-36 grid grid-cols-[2fr_8fr] gap-12">
			<div className="h-full bg-pink-300"></div>
			<div>
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
