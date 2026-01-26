import { ArrowLeft, BookOpen, Link2, Star, AlertTriangle, ListChecks, XCircle } from 'lucide-react';

export default function PairDetail6() {
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

      <h2 className="text-5xl font-bold text-black mb-4">Khả Năng – Hiện Thực</h2>
      
      <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#C19A6B' }}>
        <p className="text-black font-semibold">
          Quá trình chuyển hóa từ những điều có thể xảy ra thành những điều đã xảy ra
        </p>
      </div>

      {/* Định Nghĩa */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><BookOpen size={32} /> Định Nghĩa</h3>
        
        <div className="space-y-4">
          <div className="border-l-4 border-black pl-6">
            <h4 className="text-xl font-bold text-black mb-2">Khả Năng (Possibility)</h4>
            <p className="text-black opacity-80">
              Những điều có thể xảy ra, có thể tồn tại trong những điều kiện thích hợp nhưng chưa xảy ra hoặc chưa tồn tại. Nó là tiềm năng, những cơ hội, những lựa chọn có thể.
            </p>
            <p className="text-black opacity-70 mt-2 italic">
              Ví dụ: Bạn có khả năng trở thành bác sĩ (nếu học tập chăm chỉ) | Một hạt giống có khả năng thành cây
            </p>
          </div>

          <div className="border-l-4 border-black pl-6">
            <h4 className="text-xl font-bold text-black mb-2">Hiện Thực (Reality)</h4>
            <p className="text-black opacity-80">
              Những điều đã xảy ra, đã tồn tại thực tế. Nó không còn là tiềm năng mà đã trở thành sự kiện, sự vật cụ thể có thể được cảm nhận.
            </p>
            <p className="text-black opacity-70 mt-2 italic">
              Ví dụ: Bạn đã trở thành bác sĩ, đang làm việc tại bệnh viện | Hạt giống đã thành cây, đã sinh ra quả
            </p>
          </div>
        </div>
      </section>

      {/* Mối Liên Hệ */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><Link2 size={32} /> Mối Liên Hệ Giữa Khả Năng và Hiện Thực</h3>
        
        <div className="space-y-4 text-black opacity-80">
          <div className="bg-yellow-50 p-4 rounded" style={{ backgroundColor: '#f0ebe3' }}>
            <p className="font-semibold text-black mb-2">💡 Quy Luật Cơ Bản:</p>
            <p>
              <strong>Sự phát triển của sự vật là quá trình chuyển hóa từ khả năng thành hiện thực.</strong> Không phải tất cả khả năng đều trở thành hiện thực - phụ thuộc vào điều kiện và hoàn cảnh.
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-bold text-black mb-2">Chiều hướng phát triển:</h4>
            <p>
              Khả năng → Hiện thực là chiều hướng phát triển tự nhiên. Hiện thực không thể quay trở lại khả năng (trừ trong trường hợp suy thoái).
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-bold text-black mb-2">Vai trò của điều kiện:</h4>
            <p>
              Để khả năng trở thành hiện thực, cần những điều kiện nhất định. Không có điều kiện, khả năng sẽ mãi là khả năng mà không bao giờ thực hiện.
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-bold text-black mb-2">Tính chất của hiện thực:</h4>
            <p>
              Hiện thực còn chứa trong nó những khả năng mới. Ví dụ: Cây lớn lên (từ khả năng thành hiện thực), nhưng cây lớn này lại có khả năng sinh ra quả mới.
            </p>
          </div>
        </div>
      </section>

      {/* Ví Dụ Thực Tế */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><Star size={32} /> Ví Dụ Thực Tế</h3>
        
        <div className="space-y-6">
          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="font-bold text-black mb-2">Ví Dụ 1: Hạt Giống Thành Cây</h4>
            <div className="text-black opacity-80">
              <p><strong>Khả Năng:</strong> Hạt giống có khả năng thành cây (nếu được trồng đúng cách)</p>
              <p className="mt-2">→ <strong>Điều kiện cần thiết:</strong> Đất tốt, nước, ánh nắng, nhiệt độ phù hợp</p>
              <p className="mt-2">→ <strong>Hiện Thực:</strong> Hạt nảy mầm, lớn thành cây, cho quả</p>
              <p className="mt-2 italic text-sm">Nếu thiếu một trong những điều kiện, khả năng sẽ không thực hiện và hạt sẽ chết</p>
            </div>
          </div>

          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="font-bold text-black mb-2">Ví Dụ 2: Học Tập Trở Thành Bác Sĩ</h4>
            <div className="text-black opacity-80">
              <p><strong>Khả Năng:</strong> Bạn có khả năng trở thành bác sĩ (khả năng tiềm ẩn)</p>
              <p className="mt-2">→ <strong>Điều kiện cần thiết:</strong> Học tập chăm chỉ, vào trường y, làm bài tập thực hành, thi đậu</p>
              <p className="mt-2">→ <strong>Hiện Thực:</strong> Bạn tốt nghiệp, có bằng cấp, làm việc tại bệnh viện</p>
              <p className="mt-2">Nếu bỏ cuộc giữa đường, khả năng sẽ không thực hiện</p>
            </div>
          </div>

          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="font-bold text-black mb-2">Ví Dụ 3: Tài Năng Âm Nhạc</h4>
            <div className="text-black opacity-80">
              <p><strong>Khả Năng:</strong> Ai đó có khả năng trở thành nhạc sĩ xuất sắc</p>
              <p className="mt-2">→ <strong>Điều kiện cần thiết:</strong> Huấn luyện từ sớm, luyện tập hàng ngày, có người hướng dẫn tốt</p>
              <p className="mt-2">→ <strong>Hiện Thực:</strong> Trở thành nhạc sĩ chuyên nghiệp, biểu diễn trên sân khấu lớn</p>
              <p className="mt-2">Nếu không có điều kiện để phát triển, tài năng sẽ bị phí lãng</p>
            </div>
          </div>

          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="font-bold text-black mb-2">Ví Dụ 4: Ý Tưởng Thành Sản Phẩm</h4>
            <div className="text-black opacity-80">
              <p><strong>Khả Năng:</strong> Bạn có ý tưởng tốt cho một ứng dụng di động</p>
              <p className="mt-2">→ <strong>Điều kiện cần thiết:</strong> Tìm nhà đầu tư, lập đội ngũ lập trình, phát triển sản phẩm, quảng cáo</p>
              <p className="mt-2">→ <strong>Hiện Thực:</strong> Ứng dụng được ra mắt, có hàng triệu người dùng</p>
              <p className="mt-2">Nếu chỉ có ý tưởng mà không hành động, khả năng sẽ mãi là khả năng</p>
            </div>
          </div>

          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="font-bold text-black mb-2">Ví Dụ 5: Khả Năng Thay Đổi Cuộc Sống</h4>
            <div className="text-black opacity-80">
              <p><strong>Khả Năng:</strong> Bạn có khả năng thoát ra khỏi giai đoạn khó khăn</p>
              <p className="mt-2">→ <strong>Điều kiện cần thiết:</strong> Quyết tâm, hỗ trợ từ gia đình, cơ hội việc làm</p>
              <p className="mt-2">→ <strong>Hiện Thực:</strong> Bạn thoát khỏi khó khăn, cuộc sống tốt hơn</p>
            </div>
          </div>
        </div>
      </section>

      {/* Các Loại Khả Năng */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><Star size={32} /> Các Loại Khả Năng</h3>
        
        <div className="space-y-4 text-black opacity-80">
          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-bold text-black mb-2">1. Khả Năng Thực (Real Possibility)</h4>
            <p>
              Là những khả năng có cơ sở thực tế, có thể xảy ra nếu có đủ điều kiện. Ví dụ: Một học sinh giỏi toán có khả năng thực trở thành kỹ sư (nếu tiếp tục học).
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-bold text-black mb-2">2. Khả Năng Trừu Tượng (Abstract Possibility)</h4>
            <p>
              Là những khả năng logic, có thể lý thuyết xảy ra nhưng ít có cơ sở thực tế. Ví dụ: Bất kỳ ai cũng có khả năng trở thành thiên tài (lý thuyết), nhưng ít có cơ sở thực tế.
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-bold text-black mb-2">3. Khả Năng Tốt (Good Possibility)</h4>
            <p>
              Là những khả năng dẫn đến kết quả tích cực, mong muốn. Ví dụ: Bạn có khả năng tốt là thành công nếu chăm chỉ.
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-bold text-black mb-2">4. Khả Năng Xấu (Bad Possibility)</h4>
            <p>
              Là những khả năng dẫn đến kết quả tiêu cực, không mong muốn. Ví dụ: Bạn có khả năng thất bại nếu lười biếng.
            </p>
          </div>
        </div>
      </section>

      {/* Ứng Dụng */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><Star size={32} /> Ứng Dụng Thực Tế</h3>
        
        <div className="space-y-4 text-black opacity-80">
          <div>
            <h4 className="font-bold text-black mb-2">1. Trong Giáo Dục</h4>
            <p>
              Hiểu rằng học sinh có nhiều khả năng, và nhiệm vụ của giáo dục là tạo điều kiện để những khả năng đó trở thành hiện thực. Mỗi học sinh có tiềm năng khác nhau, cần giáo dục phù hợp.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-black mb-2">2. Trong Quản Lý Nhân Sự</h4>
            <p>
              Nhà quản lý cần xác định khả năng của từng nhân viên, rồi tạo điều kiện để họ phát triển. Tìm việc làm phù hợp với khả năng của họ.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-black mb-2">3. Trong Lập Kế Hoạch</h4>
            <p>
              Lập kế hoạch chiến lược dựa trên những khả năng có thể có. Nhưng phải chuẩn bị những điều kiện cần thiết để khả năng đó thực hiện.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-black mb-2">4. Trong Phát Triển Cá Nhân</h4>
            <p>
              Nhận biết những khả năng tiềm ẩn của bản thân, rồi tạo điều kiện (học tập, luyện tập, kiên trì) để thực hiện những khả năng đó. Những khả năng không được phát triển sẽ bị lãng phí.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-black mb-2">5. Trong Phòng Chống Rủi Ro</h4>
            <p>
              Dự đoán những khả năng xấu (rủi ro) có thể xảy ra, rồi chuẩn bị để ngăn chặn. Ví dụ: Bảo hiểm dựa trên ý tưởng về những khả năng xấu có thể xảy ra.
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
              <strong className="text-black">Cho rằng khả năng là chắc chắn:</strong> "Tôi có tiền năng, nên chắc chắn sẽ thành công" → Thực tế cần những điều kiện và nỗ lực.
            </div>
          </div>

          <div className="flex gap-4">
            <XCircle size={24} className="text-red-600 flex-shrink-0 mt-1" />
            <div>
              <strong className="text-black">Coi nhẹ vai trò của điều kiện:</strong> "Tôi không cần học/luyện tập vì tôi có tài năng" → Sai! Tài năng cần được phát triển qua điều kiện.
            </div>
          </div>

          <div className="flex gap-4">
            <XCircle size={24} className="text-red-600 flex-shrink-0 mt-1" />
            <div>
              <strong className="text-black">Không tin vào khả năng của mình:</strong> "Tôi không có khả năng trở thành..." → Bỏ qua những tiềm năng có thể phát triển.
            </div>
          </div>

          <div className="flex gap-4">
            <XCircle size={24} className="text-red-600 flex-shrink-0 mt-1" />
            <div>
              <strong className="text-black">Chỉ chú trọng khả năng hiện tại:</strong> Quên rằng hiện thực vừa rồi còn chứa những khả năng mới. Cần liên tục phát triển những khả năng mới.
            </div>
          </div>

          <div className="flex gap-4">
            <XCircle size={24} className="text-red-600 flex-shrink-0 mt-1" />
            <div>
              <strong className="text-black">Nhầm lẫn khả năng với tính năng:</strong> "Máy tính này có khả năng chạy game" → Đúng, nhưng đó là tính năng (hiện thực) của máy, không phải khả năng (tiềm năng).
            </div>
          </div>
        </div>
      </section>

      {/* Tóm tắt */}
      <section className="bg-blue-50 p-8 rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><ListChecks size={32} /> Tóm Tắt</h3>
        
        <div className="space-y-3 text-black opacity-80">
          <p>✓ <strong>Khả Năng</strong> = Những điều có thể xảy ra, nhưng chưa xảy ra</p>
          <p>✓ <strong>Hiện Thực</strong> = Những điều đã xảy ra, đã tồn tại</p>
          <p>✓ Sự phát triển = Quá trình chuyển hóa từ khả năng thành hiện thực</p>
          <p>✓ <strong>Không phải tất cả khả năng đều thành hiện thực</strong> - cần những điều kiện thích hợp</p>
          <p>✓ Hiện thực vừa rồi lại chứa những khả năng mới - quá trình phát triển không bao giờ dừng lại</p>
          <p>✓ Hiểu rõ cặp phạm trù này giúp chúng ta <strong>khám phá tiềm năng, lập kế hoạch, và tạo điều kiện để thực hiện mục tiêu</strong></p>
        </div>
      </section>
    </div>
  )
}
