import TableauDashboard from "../../TableauDashboard";

const url = "https://public.tableau.com/shared/GW9973SDB?:display_count=n&:origin=viz_share_link";

const Unemployment = () => {
	return (
		<div>
			<h2>Tỉ lệ thất nghiệp ở Việt Nam</h2>
			<TableauDashboard url={url} />
			<p>
				Vào các mốc năm như 2008-2009 là thời điểm của cuộc khủng hoảng tài chính toàn cầu. Tuy
				nhiên tỉ lệ thất nghiệp lại bắt đầu giảm mạnh từ năm 2008.
			</p>
			<p>
				Nếu chia ra 2 mốc thời gian, trước cuộc khủng hoảng tài chính từ 1998 đến 2007, và sau cuộc
				khủng hoảng từ 2010 đến 2022. Thì:
			</p>
			<ul>
				<li>Tỉ lệ thất nghiệp trung bình trước khủng hoảng tài chính là 5.845%</li>
				<li>Tỉ lệ thất nghiệp trung bình sau khủng hoảng tài chính chỉ còn 2.391875 %</li>
			</ul>
			<p>
				Từ năm 2020 khi có sự xuất hiện của dịch Covid, tỉ lệ thất nghiệp ở Việt Nam tăng nhẹ từ
				2.17 đến 2.48%. Cho đến năm 2021, khi đại dịch đạt mốc đỉnh điểm khiến các hoạt động kinh tế
				thì tỉ lệ thất nghiệp tăng đến 3.2%, một sự thay đổi đột ngột khi tỉ lệ này không đạt tới 3%
				kể từ năm 2008. Nguyên nhân có thể là do khi đại dịch covid xuất hiện, các hoạt động kinh tế
				xã hội bị trì trệ, khiến nhiều doanh nghiệp đã phải giảm nhân viên hoặc đóng cửa doanh
				nghiệp do sự suy giảm hoạt động kinh doanh, cách ngành hàng, ngành du lịch và một số ngành
				đòi hỏi sự tương tác trực tiếp giữa người với người gặp khó khăn.
			</p>
		</div>
	);
};

export default Unemployment;
