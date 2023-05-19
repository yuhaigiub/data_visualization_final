import TableauDashboard from "../../TableauDashboard";

const url =
	"https://public.tableau.com/views/LmphtVitNam/Dashboard?:language=en-US&:display_count=n&:origin=viz_share_link";

const Inflation = () => {
	return (
		<div className="flex flex-col gap-4">
			<h2 id="inflation">Tỉ lệ lạm phát ở Việt Nam</h2>
			<TableauDashboard url={url} />
			<p>
				Từ khoảng năm 1998 đến năm 2013, lạm phát tăng giảm không đồng đều ở nước ta, có cả tình
				trạng giảm phát vào năm 2000(-1.77%) và có các trường hợp lạm phát tăng và giảm nhiều, đỉnh
				điểm là năm 2008 thời điểm khủng hoảng tài chính toàn cầu diễn ra, nước ta lạm phát đạt tới
				23.12%. Cho tới 2014 trở đi thì tình hình lạm phát ở mức ổn định hơn, chỉ từ 0.5 đến 4.1.
			</p>
			<p>
				Lạm phát đạt mốc đỉnh vào năm 2008, ở khoảng 23,12% và theo sau đó là năm 2011 với 18.68%.
				Nguyên nhân chính của tình trạng lạm phát này là do sự gia tăng giá cả tiêu dùng, đặc biệt
				là giá năng lượng, tăng chi tiêu của chính phủ và tăng nhu cầu tiêu dùng. Ngoài ra, Việt Nam
				cũng đã chứng kiến một số yếu tố khác đóng góp vào tình trạng lạm phát, như tăng trưởng kinh
				tế nhanh, dòng vốn ngoại tăng mạnh và sự cạnh tranh giữa các doanh nghiệp.
			</p>
			<p>
				Tỉ lệ thất nghiệp trung bình của Việt Nam trong 25 năm qua là 5.94264%. So với mức trung
				bình thì kể tử năm 2014, <b>tỉ lệ lạm phát cho tới nay chưa bao giờ đạt tới ngưỡng này.</b>
			</p>
		</div>
	);
};

export default Inflation;
