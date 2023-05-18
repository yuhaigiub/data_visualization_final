import TableauDashboard from "../../../TableauDashboard";

const url1 =
	"https://public.tableau.com/views/GDP_population_16843817997150/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link";

const url2 =
	"https://public.tableau.com/views/import_export_16843816879920/Dashboard2?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link";

const url3 =
	"https://public.tableau.com/views/GDP_curreBalance/Dashboard3?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link";

const Relation = () => {
	return (
		<div className="flex flex-col gap-4">
			<h3 id="relation">Phân tích quan hệ</h3>
			<p>
				Nhìn vào ma trận tương quan của các thuộc tính để thấy các thuộc tính phần lớn có độ tương
				quan thấp.
			</p>
			<p>Tuy nhiên có một số thuộc tính có độ tương quan cao như: </p>
			<ul className="list-disc pl-8">
				<li>GDP và dân số (population).</li>
				<li>Số lượng hàng hóa và dịch vụ xuất khẩu và nhập khấu.</li>
				<li>Số dư vãng lai và GDP.</li>
			</ul>
			<p>Để thay rõ các quan hệ này như thế nào tiến hành trực quan chúng: </p>
			<div className="flex flex-col gap-8">
				<div className="flex flex-col gap-4">
					<h4>GDP và dân số</h4>
					<TableauDashboard url={url1} />
					<p>
						Ở ma trận tương quan ta thấy đọ tương quan giữa GDP và dân số năm gần 0.6. Trực quan để
						xem xét mối quan hệ bằng biểu đồ scatter.
					</p>
					<p>
						Nhận thấy khi dân số của một nước tăng thì GDP của nước đó cũng tăng, hệ số tương quan
						0.6 cho thấy chúng đồng biến với nhau. Đều này cho thấy được khi dân số tăng lên thì lực
						lượng lao động được bổ sung, sẽ ảnh hưởng.
					</p>
				</div>
				<div className="flex flex-col gap-4">
					<h4>Số lượng hàng hóa và dịch vụ xuất nhập khẩu</h4>
					<TableauDashboard url={url2} />
					<p>
						Chỉ số tương quan giữa khối lượng hàng hóa và dịch vụ xuất khẩu với khối lượng hàng hóa
						và dịch vụ nhập khẩu là 0.435 ở chỉ số này ta thấy mối tương qua giữa hai quan hệ này
						không cao lắm. Khi trực quan 2 mối quan hệ này ta có thể nhận thấy hai thuộc tính này
						gần như đồng biến với nhau.
					</p>
				</div>
				<div className="flex flex-col gap-4">
					<h4>Cán cân vãng lai và GDP</h4>
					<TableauDashboard url={url3} />
					<p>
						Chỉ số tương quan của cán cân vãng lai (Current account banlance) và GDP là 0.709947. So
						với những thuộc tính khác thì đây là một chỉ số cao và thể hiện mối quan hệ đồng biến.
						Biểu đồ thể hiện rõ mối quan hệ khi cán cân vãng lai tăng sẽ là cho giá trị GDP tăng
						lên.{" "}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Relation;
