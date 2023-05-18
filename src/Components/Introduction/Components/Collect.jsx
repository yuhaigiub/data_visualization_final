const Collect = () => {
	return (
		<div>
			<h3>Thu thập dữ liệu</h3>
			<p>
				Bộ dữ liệu được lấy từ trang web:{" "}
				<a href="https://www.imf.org/en/Publications/WEO/weo-database/2023/April">Link</a>
			</p>
			<p>
				Với chủ đề về kinh tế, bộ dữ liệu cho thấy một số giá trị biểu như GDP, lạm phát, giá trị
				xuất - nhập khẩu,… Bộ dữ liệu bao gồm các các giá trị được lấy từ năm 1998 đến năm 2022.
			</p>
			<p>Bộ dữ liệu gồm 3 sheet:</p>
			<ul>
				<li>
					<b>Sheet Country:</b> Các giá tri, chỉ số kinh tế của 49 nước trong khu vực châu Á
				</li>
				<li>
					<b>Sheet Group:</b> giá trị GDP và dân số của các khu vực châu Á:
					<ol>
						<li>Trung Á</li>
						<li>Đông Nam Á</li>
						<li>Nam Á</li>
						<li>Tây Á</li>
						<li>Nam Á</li>
					</ol>
				</li>
				<li>
					<b>Sheet Region:</b> các chỉ số, giá trị kinh tế của các nhóm nước trên thế giới. Các nhóm
					nước:
					<ol>
						<li>World - Thế giới</li>
						<li>Advanced economies - Nước có kinh tế phát triển</li>
						<li>Euro area - Khu vực Châu u</li>
						<li>
							Major advanced economies (G7) (gồm 7 nước có nền kinh tế phát triển: canada, Pháp,
							Đức, Ý, Nhật, Mỹ, Anh)
						</li>
						<li>European Union - Liên minh châu u</li>
						<li>
							ASEAN-5 - 5 nước trong ASEAN bao gồm: Indonesia, Malaysia, Philippines, Singapore và
							Thái Lan
						</li>
						<li>
							Emerging market and developing economies: Các nước mới và kinh tế đang phát triển
						</li>
						<li>
							Emerging and developing Asia: Các nước mới và kinh tế đang phát triển khu vực châu Á
						</li>
						<li>Middle East and Central Asia: Trung Đông và Trung Á</li>
					</ol>
				</li>
			</ul>
			<p>Các thuộc tính được mô tả ở bảng sau:</p>
			<Table />
		</div>
	);
};

export default Collect;

const Table = () => {
	return (
		<table>
			<thead>
				<tr>
					<th>Thuộc tính</th>
					<th>Mô tả</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Country</td>
					<td>Tên nước thuộc khu vực châu Á</td>
				</tr>
				<tr>
					<td>Regions</td>
					<td>
						Cho biết nước đó thuộc khu vực nào của châu Á. Được chia thành 5 khu vực: Trung Á, Bắc
						Á, Nam Á, Tây Á, Đông Á.
					</td>
				</tr>
				<tr>
					<td>Year</td>
					<td>Cho biết năm (từ 1998 - 2022)</td>
				</tr>
				<tr>
					<td>Gross domestic product, current prices</td>
					<td>Giá trị tổng sản phẩm trong nước (GDP) Đơn vị tính là Tỷ USD</td>
				</tr>
				<tr>
					<td>Total investment</td>
					<td>
						Phần trăm tổng nguồn đầu tư so với GDP. chỉ số dựa trên: National Statistics Office Sổ
						tay tài khoản quốc gia sử dụng: Hệ thống tài khoản quốc gia (SNA) Tháng bắt đầu/kết thúc
						năm báo cáo: Tháng 1/tháng 12
					</td>
				</tr>
				<tr>
					<td>Gross national savings</td>
					<td>
						Phần trăm tổng tiết kiệm của của quố gia so với GDP. chỉ số dựa trên: National
						Statistics Office Sổ tay tài khoản quốc gia sử dụng: Hệ thống tài khoản quốc gia (SNA)
						Tháng bắt đầu/kết thúc năm báo cáo: Tháng 1/tháng 12 Phần trăm của GDP
					</td>
				</tr>
				<tr>
					<td>Inflation, average consumer prices</td>
					<td>
						Lạm phát là sự tăng mức giá chung một cách liên tục của hàng hóa và dịch vụ theo thời
						gian và đi kèm là sự mất giá trị của một loại tiền tệ. Thệ hiện phẩn trăm thay đổi của
						giá cả hàng hóa.
					</td>
				</tr>
				<tr>
					<td>Volume of imports of goods and services</td>
					<td>Phần trăm thay đổi của khối lượng hàng hóa và dịch vụ nhập khẩu. (Central Bank)</td>
				</tr>
				<tr>
					<td>Volume of Imports of goods</td>
					<td>Phần trăm thay đổi của khối lượng hàng hóa nhập khẩu. (Central Bank)</td>
				</tr>
				<tr>
					<td>Volume of exports of goods and services</td>
					<td>Phần trăm thay đổi của khối lượng hàng hóa và dịch xuất khẩu. (Central Bank)</td>
				</tr>
				<tr>
					<td>Volume of exports of goods</td>
					<td>Phần trăm thay đổi của khối lượng hàng hóa xuất khẩu. (Central Bank)</td>
				</tr>
				<tr>
					<td>Unemployment rate</td>
					<td>Phần trăm số người thất nghiệp trên lực lượng lao động. (ILO)</td>
				</tr>
				<tr>
					<td>Population</td>
					<td>Dân số của 1 nước (triệu người)</td>
				</tr>
				<tr>
					<td>General government revenue</td>
					<td>Tổng thu nhập chính phủ. Phần trăm đóng góp vào GDP</td>
				</tr>
				<tr>
					<td>General government net</td>
					<td>Tổng cho vay/vay ròng của chính phủ</td>
				</tr>

				<tr>
					<td>lending/borrowing</td>
					<td>Phầm trăm cho mượn/đang mượn</td>
				</tr>
				<tr>
					<td>General government gross debt</td>
					<td>Tổng nợ của chính phủ</td>
				</tr>
				<tr>
					<td>Current account balance</td>
					<td>Số dư tài khoản vãng lai (tỷ USD)</td>
				</tr>
			</tbody>
		</table>
	);
};
