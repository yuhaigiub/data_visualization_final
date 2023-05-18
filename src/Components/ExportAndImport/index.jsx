import TableauDashboard from "../../TableauDashboard";

const url =
	"https://public.tableau.com/views/trucquanprojectck/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link";

const ExportAndImport = () => {
	return (
		<div>
			<h2>Xuất, nhập khẩu (hàng hóa & dịch vụ)</h2>
			<TableauDashboard url={url} />
			<p>
				Ta có thể thấy, ở biểu đồ dưới, trong khoảng 10 năm, tình hình xuất nhập khẩu của các nước
				trong khu vực châu Á có nhiều biến động, với mức tăng ổn định vào các khoảng 2013-2014,
				2017-2018, và các đợt suy giảm 2015-2017, 2023-2024. Trong đó có hai mốc tăng giảm đột biến,
				thứ nhất là đợt suy giảm trầm trọng ở năm 2020 (do dịch bệnh COVID-19) và mức tăng trưởng
				vượt bậc vào các năm 2021-2022 (thời kì phục hồi kinh tế).
			</p>
			<p>
				Ngoài ra, nếu chúng ta nhìn chi tiết hơn (ở đây chúng ta sẽ so sánh khu vực Đông Nam Á) để
				thấy Việt Nam đang ở mức xuất nhập khẩu như thế nào. Ta có thể quan sát được Việt Nam có mức
				nhập khẩu ở mức trung bình, không nhập khẩu nhiều như Lào, Philippines, Malaysia. Và mức
				xuất khẩu của Việt Nam đang ở mức tương đối cao so với các nước trong khu vực.
			</p>
		</div>
	);
};

export default ExportAndImport;
