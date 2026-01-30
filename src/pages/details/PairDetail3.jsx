import { ArrowLeft, BookOpen, Link2, Star, AlertTriangle, ListChecks, XCircle } from 'lucide-react'
import { contentImages } from '../../constants/images'

export default function PairDetail3() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <button
          onClick={() => window.history.back()}
          className="mb-6 bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-700 transition inline-flex items-center gap-2"
        >
          <ArrowLeft size={20} /> Quay Lại
        </button>
      </div>

      <h2 className="text-5xl font-bold text-black mb-4">Tất Nhiên – Ngẫu Nhiên</h2>
      
      <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#C19A6B' }}>
        <p className="text-black font-semibold">
          Hai khía cạnh của mọi hiện tượng - từ xảy ra tất yếu theo quy luật đến những biến cố bất ngờ
        </p>
      </div>

      <div className="rounded-xl overflow-hidden shadow-lg mb-8">
        <img src={contentImages.pair3} alt="Tất nhiên - Ngẫu nhiên" className="w-full h-56 object-cover img-warm" />
      </div>

      {/* Khái niệm */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><BookOpen size={32} /> Khái Niệm</h3>
        
        <div className="space-y-4">
          <div className="border-l-4 border-black pl-6">
            <h4 className="text-xl font-bold text-black mb-2">Tất Nhiên</h4>
            <p className="text-black opacity-80 mb-2">
              Tất nhiên là những hiện tượng, quá trình bắt nguồn từ các nguyên nhân bên trong của kết cấu vật chất. Trong những điều kiện xác định, nó tất yếu phải diễn ra theo một cách nhất định, không thể diễn ra khác.
            </p>
            <div className="bg-gray-50 p-3 rounded mt-2">
              <p className="text-sm text-black opacity-80">
                <strong>Ví dụ:</strong> Sự sinh trưởng và phát triển của cây trồng khi có đủ đất, nước, ánh sáng là kết quả tất nhiên của các quy luật sinh học.
              </p>
            </div>
          </div>

          <div className="border-l-4 border-black pl-6">
            <h4 className="text-xl font-bold text-black mb-2">Ngẫu Nhiên</h4>
            <p className="text-black opacity-80 mb-2">
              Ngẫu nhiên là những hiện tượng, quá trình phát sinh do sự tác động của các nhân tố bên ngoài, do sự ngẫu hợp của nhiều hoàn cảnh khác nhau. Vì vậy, nó có thể xảy ra hoặc không xảy ra, có thể xảy ra theo nhiều cách khác nhau.
            </p>
            <div className="bg-gray-50 p-3 rounded mt-2">
              <p className="text-sm text-black opacity-80">
                <strong>Ví dụ:</strong> Thời tiết thay đổi đột ngột làm ảnh hưởng đến mùa vụ là yếu tố ngẫu nhiên đối với sản xuất nông nghiệp.
              </p>
            </div>
          </div>

          <div className="border-l-4 border-yellow-400 pl-6 mt-4" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="text-lg font-bold text-black mb-2">Ngẫu Nhiên Cũng Có Nguyên Nhân Và Tuân Theo Quy Luật</h4>
            <p className="text-black opacity-80 mb-2">
              Mặc dù ngẫu nhiên là những hiện tượng do các nhân tố bên ngoài và sự ngẫu hợp của nhiều hoàn cảnh quyết định, nhưng ngẫu nhiên không phải là không có nguyên nhân. Ngược lại, mỗi hiện tượng ngẫu nhiên đều có nguyên nhân cụ thể của nó và chịu sự chi phối của những quy luật khách quan.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-3">
              <p className="text-sm text-black opacity-80 mb-2">
                Trong từng lần gieo xu riêng lẻ, việc xuất hiện mặt ngửa hay mặt sấp là ngẫu nhiên, không thể dự đoán chính xác trước. Tuy nhiên, khi số lần gieo tăng lên rất lớn, tần suất xuất hiện mặt ngửa có xu hướng tiến gần đến 1/2, phản ánh tính quy luật của hiện tượng.
              </p>
              <p className="text-sm text-black opacity-80 mt-2">
                <strong>Điều đó cho thấy:</strong>
              </p>
              <ul className="ml-4 space-y-1 text-sm mt-2">
                <li>• Cái ngẫu nhiên riêng lẻ có tính không ổn định.</li>
                <li>• Nhưng tổng thể của các hiện tượng ngẫu nhiên lại bộc lộ cái tất nhiên, tức là quy luật khách quan.</li>
              </ul>
              <p className="text-sm text-black opacity-80 mt-2 italic">
                Như vậy, ngẫu nhiên là hình thức biểu hiện của tất nhiên, và thông qua vô số cái ngẫu nhiên, cái tất nhiên mới được bộc lộ ra ngoài.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mối quan hệ biện chứng giữa tất nhiên và ngẫu nhiên */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><Link2 size={32} /> Mối Quan Hệ Biện Chứng Giữa Tất Nhiên và Ngẫu Nhiên</h3>
        
        {/* Thứ nhất */}
        <div className="mb-8">
          <h4 className="text-2xl font-bold text-black mb-4">Thứ Nhất: Tất Nhiên và Ngẫu Nhiên Đều Tồn Tại Khách Quan và Có Vai Trò Nhất Định</h4>
          
          <div className="space-y-4 text-black opacity-80">
            <p>
              Tất nhiên và ngẫu nhiên đều tồn tại khách quan, độc lập với ý thức của con người, và đều có vị trí, vai trò nhất định đối với sự phát triển của sự vật. Giữa tất nhiên và ngẫu nhiên tồn tại mối liên hệ hữu cơ, thống nhất với nhau.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="mb-2"><strong>Trong đó:</strong></p>
              <ul className="ml-4 space-y-2">
                <li>• <strong>Cái tất nhiên</strong> có tác dụng chi phối xu hướng phát triển của sự vật.</li>
                <li>• <strong>Cái ngẫu nhiên</strong> có tác dụng làm cho quá trình phát triển của sự vật diễn ra nhanh hoặc chậm, quanh co hay thuận lợi.</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Ví dụ:</strong> Một người trúng xổ số độc đắc với số tiền rất lớn. Đây là yếu tố ngẫu nhiên, nhưng nó có thể làm cho cuộc sống của người đó thay đổi nhanh hơn so với quá trình lao động thông thường.
              </p>
            </div>
          </div>
        </div>

        {/* Thứ hai */}
        <div className="mb-8">
          <h4 className="text-2xl font-bold text-black mb-4">Thứ Hai: Tất Nhiên và Ngẫu Nhiên Thống Nhất Biện Chứng Với Nhau</h4>
          
          <div className="space-y-4 text-black opacity-80">
            <p>
              Tất nhiên và ngẫu nhiên tồn tại trong mối quan hệ thống nhất biện chứng. Cái tất nhiên bao giờ cũng vạch đường đi cho mình thông qua vô số cái ngẫu nhiên. Ngược lại, cái ngẫu nhiên là hình thức biểu hiện của cái tất nhiên, đồng thời bổ sung cho cái tất nhiên.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-semibold mb-2">Do đó:</p>
              <ul className="ml-4 space-y-2">
                <li>• Trong cái tất nhiên luôn chứa đựng những yếu tố ngẫu nhiên.</li>
                <li>• Trong cái ngẫu nhiên cũng luôn hàm chứa cái tất nhiên.</li>
                <li>• Không có ngẫu nhiên thì cái tất nhiên không thể biểu hiện ra ngoài.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Thứ ba */}
        <div>
          <h4 className="text-2xl font-bold text-black mb-4">Thứ Ba: Tất Nhiên và Ngẫu Nhiên Có Thể Chuyển Hóa Cho Nhau</h4>
          
          <div className="space-y-4 text-black opacity-80">
            <p>
              Tất nhiên và ngẫu nhiên có thể chuyển hóa cho nhau trong những điều kiện nhất định. Cái ngẫu nhiên trong hoàn cảnh này có thể trở thành tất nhiên trong hoàn cảnh khác, và ngược lại.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm mb-2">
                <strong>Ví dụ:</strong> Trao đổi hàng hóa trong xã hội nguyên thủy ban đầu chỉ là ngẫu nhiên, nhưng khi lực lượng sản xuất phát triển, nó trở thành hoạt động tất nhiên trong xã hội hiện đại.
              </p>
            </div>
            <p className="mt-4">
              Ngoài ra, khi xem xét: Trong mối quan hệ này, một sự vật hay hiện tượng có thể là ngẫu nhiên; nhưng trong mối quan hệ khác, chính sự vật hay hiện tượng đó lại trở thành tất nhiên.
            </p>
          </div>
        </div>
      </section>

      {/* Ý nghĩa phương pháp luận */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><Star size={32} /> Ý Nghĩa Phương Pháp Luận</h3>
        
        <div className="space-y-6 text-black opacity-80">
          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <p className="mb-3">
              Trong hoạt động thực tiễn, con người phải dựa vào cái tất nhiên, tức là những mối liên hệ bản chất, ổn định và có tính quy luật của sự vật, không thể dựa vào cái ngẫu nhiên để xác định mục tiêu, đường lối và kế hoạch lâu dài.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-3">
              <p className="text-sm">
                <strong>Ví dụ:</strong> Trong sản xuất kinh doanh, doanh nghiệp phải dựa vào quy luật cung – cầu của thị trường (cái tất nhiên) để xây dựng chiến lược phát triển, chứ không thể dựa vào những đơn hàng bất ngờ hay lợi nhuận nhất thời (cái ngẫu nhiên).
              </p>
            </div>
          </div>

          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <p className="mb-3">
              Tuy nhiên, trong hoạt động thực tiễn, bên cạnh việc xây dựng phương án chính dựa trên cái tất nhiên, con người cần chuẩn bị các phương án dự phòng, nhằm chủ động ứng phó với những biến động ngẫu nhiên có thể xảy ra, từ đó hạn chế rủi ro và nâng cao hiệu quả hoạt động.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-3">
              <p className="text-sm">
                <strong>Ví dụ:</strong> Trong tổ chức một sự kiện ngoài trời, kế hoạch chính dựa trên điều kiện thời tiết bình thường là tất nhiên, nhưng ban tổ chức vẫn phải chuẩn bị phương án dự phòng khi trời mưa hoặc có sự cố kỹ thuật – đó là việc tính đến yếu tố ngẫu nhiên.
              </p>
            </div>
          </div>

          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <p className="mb-3">
              Mặt khác, do cái tất nhiên không tồn tại một cách thuần túy mà luôn thể hiện thông qua vô số cái ngẫu nhiên, nên trong quá trình nhận thức, muốn nhận thức đúng cái tất nhiên, con người phải quan sát, nghiên cứu, phân tích và so sánh nhiều hiện tượng ngẫu nhiên khác nhau, từ đó rút ra bản chất và quy luật chung.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-3">
              <p className="text-sm">
                <strong>Ví dụ:</strong> Muốn rút ra quy luật học tập của sinh viên, không thể chỉ dựa vào kết quả của một cá nhân hay một kỳ thi riêng lẻ (ngẫu nhiên), mà phải phân tích kết quả học tập của nhiều sinh viên, trong nhiều giai đoạn khác nhau, từ đó mới nhận thức được xu hướng và quy luật chung (tất nhiên).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
