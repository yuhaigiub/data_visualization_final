import TableauDashboard from "../../TableauDashboard";

const url1 =
	"https://public.tableau.com/views/Totalinvestment/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link";

const url2 =
	"https://public.tableau.com/views/Generalgovernmentnetlendingborrowing/Dashboard2?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link";

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
				là một chỉ số kinh tế thể hiện sự chênh lệch giữa thu nhập và chi tiêu của chính phủ trong
				một giai đoạn nhất định. Nếu chỉ số này có giá trị dương, tức là chính phủ đang cho vay hoặc
				tăng dự trữ tiền, nếu chỉ số này có giá trị âm, tức là chính phủ đang vay tiền hoặc giảm dự
				trữ tiền. Ta chia thời gian ra thành 3 giai đoạn, giai đoạn 1 từ 1998 đến 2006, giai đoạn 2
				từ 2007 đến 2015 và giai đoạn 3 là phần còn lại.
			</p>
			<p className="font-bold">Giai đoạn 1</p>
			<ul className="flex flex-col gap-2 list-disc">
				<li>
					Azerbaijan, Brunei, Darussalam, Kazakhstan, Korea, Kuwait, Macao SAR, Oman, Qatar, Saudi
					Arabia, Singapore, Timor-Leste, Turkmenistan, United Arab Emirates là các nước có giá trị
					GNL dương với nước lớn nhất là Kuwait với tổng giá trị 216.4. Các lý do khả quan nhất dẫn
					đến việc này có thể là: chính sách tài khóa, ngành công nghiệp phát triển, tăng trưởng
					kinh tế, quản lý tài chính.
				</li>
				<li>Các nước còn lại mang giá trị âm và nước mang giá trị âm lớn nhất là Lebanon.</li>
			</ul>

			<p className="font-bold">Giai đoạn 2</p>
			<ul className="flex flex-col gap-2 list-disc">
				<li>
					Các nước mang giá trị GNL Dương lúc này đã thay đổi thànhi : Azerbaijan, Brunei
					Darussalam, Hong Kong SAR, Kazakhstan, Korea, Kuwait, Macao SAR, Oman, Qatar, Saudi
					Arabia, Singapore, Tajikistan, Turkmenistan, United Arab Emirates, Uzbekistan. Và Kuwait
					vẫn là nước có giá trị GNL lớn nhất với 236.7.
				</li>
				<li>
					Nước mang giá trị GNL âm lớn nhất giai đoạn này đã là Timor-Leste với giá trị -234.5.
				</li>
			</ul>

			<p className="font-bold">Giai đoạn 3</p>
			<ul className="flex flex-col gap-2 list-disc">
				<li>
					Giai đoạn này có 1 biến động rất lớn là Covid-19 đã ảnh hưởng rất nhiều đến các quốc gia
					đang khảo sát.
				</li>
				<li>
					Lúc này chỉ còn các nước: Azerbaijan, Korea, Kuwait, Qatar, Singapore, United Arab Emirate
					mang giá trị GNL dương vì ảnh hưởng bởi Covid với nước GNL lớn nhất là Qatar với 59.4
				</li>
				<li>Nước mang giá trị GNL âm lớn nhất giai đoạn vẫn là Timor-Leste với giá trị -280.9.</li>
			</ul>
		</div>
	);
};

export default DebtAndInvestment;
