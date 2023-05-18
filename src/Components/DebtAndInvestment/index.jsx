import TableauDashboard from "../../TableauDashboard";

const url1 =
	"https://public.tableau.com/app/profile/c.i.minh.ch.nh/viz/project_total_investment/Sheet1";

const url2 =
	"https://public.tableau.com/app/profile/c.i.minh.ch.nh/viz/project_general_government_net_lending/Sheet3";

const DebtAndInvestment = () => {
	return (
		<div className="flex flex-col gap-4">
			<h2 id="debt">Tỉ lệ nợ chính phủ + đầu tư</h2>
			<TableauDashboard url={url1} />
			<p>Ta thấy được rằng màu của vùng Châu Á và Châu Phi đậm hơn các vùng khác,lý do là:</p>
			<ul>
				<li>
					<b>Tăng trưởng kinh tế:</b> Châu Á và Châu Phi đang trải qua giai đoạn phát triển kinh tế
					mạnh mẽ và có tốc độ tăng trưởng cao hơn so với các khu vực khác trên thế giới. Các quốc
					gia như Trung Quốc, Ấn Độ và Nigeria đang trở thành các trung tâm kinh tế toàn cầu và thu
					hút các nhà đầu tư quốc tế.
				</li>
				<li>
					<b>Điều kiện kinh doanh:</b> Các nước Châu Á và Châu Phi đã đưa ra những chính sách thuận
					lợi cho các nhà đầu tư nước ngoài, như giảm thuế và đầu tư vào các cơ sở hạ tầng. Nhiều
					quốc gia trong khu vực đã đưa ra các chương trình khuyến khích đầu tư và cho phép 100% vốn
					nước ngoài đầu tư vào một số lĩnh vực.
				</li>
				<li>
					<b>Dân số và tiềm năng thị trường:</b> Châu Á và Châu Phi có dân số đông đảo và thị trường
					tiềm năng lớn, với nhu cầu tăng trưởng cao về hàng hóa và dịch vụ. Vì vậy, các nhà đầu tư
					quốc tế thường tìm kiếm các cơ hội đầu tư vào các khu vực này để tận dụng tiềm năng thị
					trường đang tăng trưởng.
				</li>
			</ul>
			<TableauDashboard url={url2} />
			<p>
				ta thấy các nước có giá trị dương ít hơn rất nhiều so với các nước có giá trị âm {"=>"} phần
				lớn các nước trên thế giới hiện nay đều đang nợ rất nhiều
			</p>
		</div>
	);
};

export default DebtAndInvestment;
