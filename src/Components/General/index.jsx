import TableauDashboard from "../../TableauDashboard";
import Asia from "./Components/Asia";

const url =
	"https://public.tableau.com/views/economic_overall/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link";

const General = () => {
	return (
		<div>
			<h2>Tổng quan</h2>
			<TableauDashboard url={url} />
			<h2>Mô tả Dashboard</h2>
			<p>
				Mục tiêu nhóm hướng tới là phân tích kinh tế của các nước châu Á và so sánh với Việt Nam.
				Các nước Châu Á được chia thành 5 khu vực lần lượt là Trung Á, Đông Á, Nam á, Đông Nam á và
				Tây Á. Do Bắc Á chỉ gồm Nga và Mông Cổ nhưng Nga được xem như thuộc Châu u, nên nhóm quyết
				định gộp Mông Cổ vào với Đông Á.
			</p>
			<p>
				Có tất cả 4 biểu đồ, với biểu đồ map dùng để làm filter dashboard đồng thời hiển thị dân số
				các nước và dân số khu vực. Với biểu đồ cột phía trên bên trái là biểu đồ thể hiện GDP với
				đơn vị USD của các khu vực năm 2022. Biểu đồ cột bên cạnh thì thể hiện GDP bình quân đầu
				người trên 1 năm của mỗi quốc gia. Cuối cùng biểu đồ đường thể hiện sự thay đổi GDP qua các
				năm của từng nước.
			</p>
			<h3>Phân tích</h3>
			<Asia />
		</div>
	);
};

export default General;
