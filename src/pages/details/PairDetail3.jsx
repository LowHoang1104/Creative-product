import { ArrowLeft, BookOpen, Link2, Star, AlertTriangle, ListChecks, XCircle } from 'lucide-react';

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

      {/* Định Nghĩa */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><BookOpen size={32} /> Định Nghĩa</h3>
        
        <div className="space-y-4">
          <div className="border-l-4 border-black pl-6">
            <h4 className="text-xl font-bold text-black mb-2">Tất Nhiên (Necessity)</h4>
            <p className="text-black opacity-80">
              Những hiện tượng hoặc kết quả xảy ra theo một quy luật nhất định, có tính tất yếu. Khi các điều kiện đủ, tất nhiên nó sẽ xảy ra, không có sự lựa chọn.
            </p>
            <p className="text-black opacity-70 mt-2 italic">
              Ví dụ: Nước sôi ở 100°C là tất nhiên theo quy luật vật lý | Khi bạn thả một quả táo, nó tất nhiên sẽ rơi xuống do trọng lực
            </p>
          </div>

          <div className="border-l-4 border-black pl-6">
            <h4 className="text-xl font-bold text-black mb-2">Ngẫu Nhiên (Contingency)</h4>
            <p className="text-black opacity-80">
              Những hiện tượng xảy ra không theo quy luật xác định, không lường trước được. Nó có thể xảy ra, có thể không xảy ra; hoặc xảy ra theo nhiều cách khác nhau.
            </p>
            <p className="text-black opacity-70 mt-2 italic">
              Ví dụ: Bạn gặp bạn cũ trên phố là ngẫu nhiên | Xúc xắc lăn ra mặt nào là ngẫu nhiên | Thời tiết hôm nay là mưa hay nắng
            </p>
          </div>
        </div>
      </section>

      {/* Mối Liên Hệ */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><Link2 size={32} /> Mối Liên Hệ Giữa Tất Nhiên và Ngẫu Nhiên</h3>
        
        <div className="space-y-4 text-black opacity-80">
          <div className="bg-yellow-50 p-4 rounded" style={{ backgroundColor: '#f0ebe3' }}>
            <p className="font-semibold text-black mb-2">💡 Chìa khóa để hiểu:</p>
            <p>
              Tất nhiên và ngẫu nhiên <strong>không đối lập mà bổ sung</strong> nhau. Không có hiện tượng nào hoàn toàn tất nhiên hay hoàn toàn ngẫu nhiên. Chúng luôn coexist ở các cấp độ khác nhau.
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-bold text-black mb-2">Ví dụ: Tung Đồng Xu</h4>
            <ul className="space-y-2 ml-4">
              <li>🎲 <strong>Mức ngẫu nhiên:</strong> Kết quả có thể là mặt hoặc sấp - không biết trước</li>
              <li>⚖️ <strong>Mức tất nhiên:</strong> Xác suất mặt = 50%, sấp = 50% - đây là quy luật tất nhiên</li>
              <li>🌍 <strong>Mức siêu vi:</strong> Những lực vật lý, hướng gió, v.v. xác định kết quả chi tiết (nhưng quá phức tạp để dự đoán)</li>
            </ul>
          </div>

          <p className="mt-4">
            Một sự kiện có vẻ ngẫu nhiên ở mức vĩ mô (con người) nhưng lại có nguyên nhân tất nhiên ở mức vi mô (các phân tử, lực vật lý).
          </p>
        </div>
      </section>

      {/* Ví Dụ Thực Tế */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><Star size={32} /> Ví Dụ Thực Tế</h3>
        
        <div className="space-y-6">
          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="font-bold text-black mb-2">Ví Dụ 1: Gặp Gỡ</h4>
            <div className="text-black opacity-80">
              <p>Bạn gặp một người bạn cũ trên phố vào một buổi chiều.</p>
              <p className="mt-2"><strong>Mức ngẫu nhiên:</strong> Có vẻ như là巧合(cơ duyên)</p>
              <p className="mt-2"><strong>Mức tất nhiên:</strong> Cả hai đều sống ở cùng thành phố, cùng thời gian rảnh, cùng đi trên con phố đó → Kết quả là gặp nhau (tất nhiên)</p>
            </div>
          </div>

          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="font-bold text-black mb-2">Ví Dụ 2: Bệnh Tật</h4>
            <div className="text-black opacity-80">
              <p>Ai đó bị cảm cúm.</p>
              <p className="mt-2"><strong>Mức ngẫu nhiên:</strong> "Tôi không biết tại sao lại bị cảm"</p>
              <p className="mt-2"><strong>Mức tất nhiên:</strong> Đã tiếp xúc với virus, hệ miễn dịch suy yếu, không chú ý vệ sinh → Tất nhiên sẽ bị cảm (có nguyên nhân rõ ràng)</p>
            </div>
          </div>

          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="font-bold text-black mb-2">Ví Dụ 3: Thời Tiết</h4>
            <div className="text-black opacity-80">
              <p>Ngày hôm nay có mưa hay nắng?</p>
              <p className="mt-2"><strong>Mức ngẫu nhiên:</strong> Dự báo thời tiết không chính xác 100%</p>
              <p className="mt-2"><strong>Mức tất nhiên:</strong> Sự chuyển động của khối khí, áp suất không khí, v.v. tuân theo quy luật khí tượng học (tất nhiên)</p>
            </div>
          </div>

          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="font-bold text-black mb-2">Ví Dụ 4: Kinh Doanh</h4>
            <div className="text-black opacity-80">
              <p>Công ty có lợi nhuận hay lỗ?</p>
              <p className="mt-2"><strong>Mức ngẫu nhiên:</strong> Có những yếu tố bất ngờ (khủng hoảng, sự kiện bất thường)</p>
              <p className="mt-2"><strong>Mức tất nhiên:</strong> Nhưng kết quả phần lớn là tất yếu từ chiến lược kinh doanh, chất lượng sản phẩm, quản lý tốt → Tất nhiên sẽ thành công hoặc thất bại</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mối Liên Hệ Chi Tiết */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><Star size={32} /> Quy Luật Về Mối Liên Hệ</h3>
        
        <div className="space-y-4 text-black opacity-80">
          <div>
            <h4 className="font-bold text-black mb-2">1. Tất Nhiên Quyết Định Ngẫu Nhiên</h4>
            <p>
              Những xu hướng chung (tất nhiên) quyết định sẽ có những thay đổi riêng lẻ (ngẫu nhiên). Ví dụ: Tất yếu là dân số tăng (tất nhiên), nhưng lần sinh con lần nào là ngẫu nhiên.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-black mb-2">2. Ngẫu Nhiên Là Biểu Hiện Của Tất Nhiên</h4>
            <p>
              Những biến cố "ngẫu nhiên" thực chất là biểu hiện của tất yếu ở cấp độ vi mô. Sự ngẫu nhiên chi tiết là để tất yếu chung diễn ra.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-black mb-2">3. Tần Suất Của Ngẫu Nhiên Hợp Lý</h4>
            <p>
              Khi lặp lại hiện tượng ngẫu nhiên nhiều lần, sẽ xuất hiện một tần suất ổn định - đây là quy luật tất nhiên (Luật số lớn). Ví dụ: Lăn xúc xắc 6000 lần, mỗi mặt sẽ xuất hiện khoảng 1000 lần.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-black mb-2">4. Sự Phát Triển Của Hiện Tượng</h4>
            <p>
              Những sự kiện ngẫu nhiên có thể trở thành yếu tố quyết định của sự phát triển. Ví dụ: Một "tai nạn" trong quá trình tiến hóa có thể dẫn đến những thích ứng mới (tất yếu).
            </p>
          </div>
        </div>
      </section>

      {/* Ứng Dụng */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><Star size={32} /> Ứng Dụng Thực Tế</h3>
        
        <div className="space-y-4 text-black opacity-80">
          <div>
            <h4 className="font-bold text-black mb-2">1. Trong Khoa Học</h4>
            <p>
              Hiểu được quy luật tất yếu giúp khoa học dự đoán được những kết quả ngẫu nhiên (dù không chính xác tuyệt đối). Ví dụ: Thống kê, xác suất, dự báo thời tiết.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-black mb-2">2. Trong Kinh Doanh</h4>
            <p>
              Nhận biết những yếu tố tất yếu (chi phí, chất lượng, thị trường) để giảm thiểu những rủi ro ngẫu nhiên. Không thể tránh mọi rủi ro, nhưng có thể chuẩn bị tốt.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-black mb-2">3. Trong Cuộc Sống</h4>
            <p>
              Hiểu rằng thành công (phần lớn) là tất yếu từ nỗ lực hàng ngày (không phải do may mắn). Nhưng cũng chấp nhận những biến cố ngẫu nhiên không thể kiểm soát.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-black mb-2">4. Trong Sức Khỏe</h4>
            <p>
              Tuân theo những quy tắc tất yếu (chế độ ăn, vận động, ngủ đủ) để xây dựng sức khỏe, mặc dù vẫn có những bệnh "ngẫu nhiên" (do virus, tai nạn, v.v.).
            </p>
          </div>
        </div>
      </section>

      {/* Lỗi Thường Gặp */}
      <section className="bg-red-50 p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><AlertTriangle size={32} /> Những Lỗi Thường Gặp</h3>
        
        <div className="space-y-4 text-black opacity-80">
          <div className="flex gap-4">
            <XCircle size={24} className="text-red-600 flex-shrink-0 mt-1" />
            <div>
              <strong className="text-black">Cho rằng tất cả là ngẫu nhiên:</strong> "Mọi thứ là vận may" → Không nỗ lực để thay đổi. Thực tế, phần lớn kết quả được quyết định bởi hành động tất yếu của chúng ta.
            </div>
          </div>

          <div className="flex gap-4">
            <XCircle size={24} className="text-red-600 flex-shrink-0 mt-1" />
            <div>
              <strong className="text-black">Cho rằng tất cả là tất yếu:</strong> "Tôi không thể thay đổi gì" → Không cố gắng. Thực tế, ngẫu nhiên mở ra nhiều khả năng khác nhau.
            </div>
          </div>

          <div className="flex gap-4">
            <XCircle size={24} className="text-red-600 flex-shrink-0 mt-1" />
            <div>
              <strong className="text-black">Nhầm lẫn giữa "không lường trước được" và "không có nguyên nhân":</strong> Thời tiết không lường trước được không phải vì nó không có nguyên nhân, mà vì quá nhiều yếu tố tương tác phức tạp.
            </div>
          </div>

          <div className="flex gap-4">
            <XCircle size={24} className="text-red-600 flex-shrink-0 mt-1" />
            <div>
              <strong className="text-black">Bỏ qua vai trò của ngẫu nhiên:</strong> "Tôi làm tất cả đúng, nên chắc chắn sẽ thành công" → Thất vọng khi các biến cố bất ngờ xảy ra. Cần chuẩn bị cho cả tất yếu lẫn ngẫu nhiên.
            </div>
          </div>
        </div>
      </section>

      {/* Tóm tắt */}
      <section className="bg-blue-50 p-8 rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><ListChecks size={32} /> Tóm Tắt</h3>
        
        <div className="space-y-3 text-black opacity-80">
          <p>✓ <strong>Tất Nhiên</strong> = Những sự kiện theo quy luật, tất yếu xảy ra khi điều kiện đủ</p>
          <p>✓ <strong>Ngẫu Nhiên</strong> = Những sự kiện không lường trước được, không theo quy luật xác định</p>
          <p>✓ Chúng không đối lập - ngẫu nhiên là biểu hiện của tất yếu ở cấp độ chi tiết</p>
          <p>✓ Tất yếu quyết định xu hướng chung; ngẫu nhiên quyết định chi tiết riêng</p>
          <p>✓ Hiểu rõ cặp phạm trù này giúp chúng ta <strong>lập kế hoạch hợp lý</strong> và <strong>chuẩn bị cho cả dự kiến lẫn bất ngờ</strong></p>
        </div>
      </section>
    </div>
  )
}
