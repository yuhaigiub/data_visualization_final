const Preprocessing = () => {
	return (
		<div className="flex flex-col gap-4">
			<h3 id="preprocess">Tiền xử lý dữ liệu</h3>
			<ul className="list-disc flex flex-col gap-2">
				<li>
					Xoay bảng dữ liệu ban đầu - chuyển các giá trị của thuộc {`‘`}Subject Descriptor{`’`}{" "}
					thành các thuộc tính.
				</li>
				<li>
					Thống kê tỉ lệ mất dữ liệu của các năm.
					<div className="pl-8">→ Chọn ra khoảng thời gian đủ dữ liệu nhất: từ 1998-2022.</div>
				</li>
				<li>
					Thống kê tỉ lệ mất dữ liệu của các nước.
					<div className="pl-8">→ Loại đi các nước: Iraq, Syria, Macao SAR, Afghanistan.</div>
				</li>
				<li>Tạo thuộc tính Regions: với giá trị từng khu vực của Châu Á.</li>
				<li>Tạo bảng (Sheet Regions) để tính tổng GDP và dân số của từng khu vực.</li>
			</ul>
		</div>
	);
};

export default Preprocessing;
