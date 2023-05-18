const Navbar = () => {
	return (
		<div className="h-full">
			<nav className="sticky top-40">
				<div className="text-center font-bold text-2xl">Mục lục</div>
				<div className="bg-pink-300 h-0.5 mx-4 my-2" />
				<ul className="pl-8 flex flex-col gap-1 list-disc">
					<li>
						<a href="#introduction">Giới thiệu dữ liệu</a>
						<ul className="pl-8 list-decimal">
							<li>
								<a href="#collect">Thu thập dữ liệu</a>
							</li>
							<li>
								<a href="#preprocess">Tiền xử lý dữ liệu</a>
							</li>
							<li>
								<a href="#relation">Phân tích quan hệ</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="#general">Tổng quan</a>
						<ul className="pl-8 list-decimal">
							<li>
								<a href="#dashboard">Mô tả Dashboard</a>
							</li>
							<li>
								<a href="#analyze">Phân tích</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="#unemployment">Tỉ lệ thất nghiệp ở Việt Nam</a>
					</li>
					<li>
						<a href="#inflation">Tỉ lệ lạm phát ở Việt Nam</a>
					</li>
					<li>
						<a href="#machineLearning">Phân tích học máy</a>
					</li>
					<li>
						<a href="#exportAndImport">Xuất, nhập khẩu</a>
					</li>
					<li>
						<a href="#debt">Tỉ lệ nợ chính phủ & đầu tư</a>
					</li>
					<li>
						<a href="#solution">Giải pháp kinh tế</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
