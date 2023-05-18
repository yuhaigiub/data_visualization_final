const MachineLearning = () => {
	return (
		<div className="flex flex-col gap-4">
			<h2 id="machineLearning">Phân tích học máy</h2>
			<h3>Mối quan hệ giữa lạm phát và tăng trưởng</h3>
			<p>Đa số các quốc gia đều theo đuổi bốn mục tiêu kinh tế cơ bản. Đó là:</p>
			<ol className="list-decimal pl-8">
				<li>Tăng trưởng đạt mức cao</li>
				<li>Lạm phát ở con số thấp</li>
				<li>Tỷ lệ thất nghiệp ở mức ít</li>
				<li>Thặng dư cán cân thanh toán</li>
			</ol>
			<p>
				Trong số này,{" "}
				<b>tăng trưởng đạt mức cao và lạm phát ở con số thấp là hai mục tiêu quan trọng nhất</b>, có
				mối liên hệ mật thiết với nhau. Đó không chỉ là mối quan hệ một chiều mà là sự tương tác qua
				lại trong thời gian ngắn. Khi lạm phát ở con số thấp, nó và tăng trưởng sẽ có mối quan hệ
				cùng chiều. Điều đó đồng nghĩa với việc, Chính phủ muốn đạt mức tăng trưởng cao thì phải
				đánh đổi bằng mức lạm phát tăng.
			</p>
			<p>
				{"=>"} Chính vì mối qua hệ của GDP và lạm phát phát nhóm tin rằng có thể dự đoán được GDP
				của tiếp theo dựa vào GDP và giá trị lạm phát của năm hiện tại.
			</p>
			<p>Những thuộc tính sử dụng trong mô hình là GDP và lạm phát của năm:</p>
			<ul className="list-disc pl-8">
				<li>
					GDP và lạm phát của năm <b>N</b> - đây là input của bài toán.
				</li>
				<li>
					GDP của năm <b>N + 1</b> - đây là output của bài toán
				</li>
			</ul>
			<p>Sử dụng mô hình hồi quy ta có được mô hình dự doán cho toàn bộ bộ dữ liệu:</p>
			<p>Sủ dụng statmodel ta có:</p>
			<img src="fig4.jpg" />
			<p>Mô hình ta có là:</p>
			<img src="fig5.jpg" />
		</div>
	);
};

export default MachineLearning;
