import { ArrowLeft, BookOpen, Link2, Star, AlertTriangle, ListChecks, XCircle } from 'lucide-react'
import { contentImages } from '../../constants/images'

export default function PairDetail4() {
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

      <h2 className="text-5xl font-bold text-black mb-4">Nội Dung – Hình Thức</h2>
      
      <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#C19A6B' }}>
        <p className="text-black font-semibold">
          Hai yếu tố cấu thành mọi sự vật - cái gì (nội dung) và cách thức (hình thức)
        </p>
      </div>

      <div className="rounded-xl overflow-hidden shadow-lg mb-8">
        <img src={contentImages.pair4} alt="Nội dung - Hình thức" className="w-full h-56 object-cover img-warm" />
      </div>

      {/* Khái niệm */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><BookOpen size={32} /> Khái Niệm</h3>
        
        <div className="space-y-4">
          <div className="border-l-4 border-black pl-6">
            <h4 className="text-xl font-bold text-black mb-2">Nội Dung</h4>
            <p className="text-black opacity-80">
              Là tổng thể tất cả các mặt, các yếu tố tạo nên sự vật. Nó trả lời cho câu hỏi: "Sự vật này gồm những cái gì bên trong?".
            </p>
          </div>

          <div className="border-l-4 border-black pl-6">
            <h4 className="text-xl font-bold text-black mb-2">Hình Thức</h4>
            <p className="text-black opacity-80">
              Là phương thức tồn tại và phát triển của sự vật. Nó không chỉ là cái vẻ ngoài (màu sắc, hình dáng) mà quan trọng hơn là cấu trúc bên trong (cách sắp xếp các yếu tố nội dung). Nó trả lời cho câu hỏi: "Sự vật này được tổ chức như thế nào?".
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mt-4">
            <p className="text-black opacity-80">
              <strong>Ví dụ:</strong> Trong một bài văn, nội dung là những ý tưởng, cảm xúc, tư liệu bạn viết ra; còn hình thức là cách bạn chia bố cục (mở bài, thân bài, kết bài), cách bạn dùng từ ngữ và ngữ pháp để liên kết các ý đó lại.
            </p>
          </div>
        </div>
      </section>

      {/* Quan hệ giữa nội dung và hình thức */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><Link2 size={32} /> Quan Hệ Giữa Nội Dung và Hình Thức</h3>
        <p className="text-black opacity-70 italic mb-6">(Được ví như Cuộc rượt đuổi biện chứng)</p>
        
        {/* Sự thống nhất */}
        <div className="mb-8">
          <h4 className="text-2xl font-bold text-black mb-4">Sự Thống Nhất: Không Thể Tách Rời</h4>
          <div className="space-y-4 text-black opacity-80">
            <p>
              Nội dung và hình thức luôn đi đôi với nhau như hình với bóng.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-black mb-2">Ví dụ: Hãy tưởng tượng bạn đi mua Cà phê.</p>
              <p className="mb-2">
                <strong>Nội dung:</strong> Là nước cốt cà phê, mùi thơm, vị đắng.
              </p>
              <p className="mb-2">
                <strong>Hình thức:</strong> Là cái ly đựng, màu sắc của nước, cách trang trí lớp bọt.
              </p>
              <p>
                → Bạn không thể uống cà phê mà không có cái gì đựng nó, và bạn cũng không thể gọi là "đi uống cà phê" nếu cái ly đó chỉ đựng nước lọc.
              </p>
            </div>
          </div>
        </div>

        {/* Nội dung quyết định hình thức */}
        <div className="mb-8">
          <h4 className="text-2xl font-bold text-black mb-4">Nội Dung Quyết Định Hình Thức</h4>
          <div className="space-y-4 text-black opacity-80">
            <p>
              Nội dung là cái năng động, luôn biến đổi trước. Khi nội dung thay đổi, hình thức buộc phải thay đổi theo để phù hợp.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-black mb-2">Ví dụ: Chiếc Điện thoại thông minh</p>
              <p>
                Ngày xưa điện thoại chỉ để nghe và gọi. Nhưng khi nhu cầu xem phim, chơi game, lướt web tăng lên, thì hình thức của nó không thể là màn hình trắng đen và bàn phím nút bấm được nữa.
              </p>
            </div>
          </div>
        </div>

        {/* Hình thức có tính độc lập tương đối */}
        <div className="mb-8">
          <h4 className="text-2xl font-bold text-black mb-4">Hình Thức Có Tính Độc Lập Tương Đối và Tác Động Ngược Lại</h4>
          
          <div className="space-y-4 text-black opacity-80">
            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-bold text-black mb-2">Thúc đẩy:</h5>
              <p className="mb-2">
                Nếu hình thức phù hợp với nội dung, nó giúp nội dung phát triển rất nhanh.
              </p>
              <p className="text-sm">
                <strong>Ví dụ:</strong> Bạn sở hữu 1 chiếc điện thoại có hỗ trợ sạc nhanh. Nếu bạn sử dụng đúng bộ cáp sạc chính hãng tiêu chuẩn cao, tốc độ sạc sẽ được đẩy lên tối đa, giúp pin đầy chỉ trong tích tắc.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg">
              <h5 className="font-bold text-black mb-2">Kìm hãm:</h5>
              <p className="mb-2">
                Nếu hình thức lỗi thời, không còn phù hợp, nó sẽ trở thành "cái phanh" kéo lùi sự phát triển của nội dung.
              </p>
              <p className="text-sm">
                <strong>Ví dụ:</strong> Vẫn chiếc điện thoại hỗ trợ sạc nhanh đó, nếu bạn dùng một sợi dây cáp cũ kỹ, rẻ tiền, thì dù công nghệ pin bên trong có hiện đại đến đâu, dòng điện cũng chỉ vào "nhỏ giọt", khiến tốc độ sạc bị chậm lại đáng kể.
              </p>
            </div>
          </div>
        </div>

        {/* Mâu thuẫn và Sự thay đổi */}
        <div>
          <h4 className="text-2xl font-bold text-black mb-4">Mâu Thuẫn và Sự Thay Đổi</h4>
          <div className="space-y-4 text-black opacity-80">
            <p>
              Nội dung đổi mới không ngừng, còn hình thức thì chậm chạp hơn. Đến một lúc nào đó, nội dung mới sẽ "phá tan" cái vỏ hình thức cũ để xác lập một hình thức mới.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-black mb-2">Ví dụ: Việc Giải Toán</p>
              <p className="mb-2">
                <strong>Nội dung:</strong> Bài toán ngày càng khó và phức tạp hơn.
              </p>
              <p className="mb-2">
                <strong>Hình thức:</strong> Phương pháp giải thủ công.
              </p>
              <p className="mb-2">
                <strong>Sự phá bỏ:</strong> Khi bài toán lên đến hàng triệu, hàng tỷ, phương pháp tính nhẩm bị "vỡ trận". Học sinh buộc phải phá bỏ cách làm cũ để dùng đến máy tính cầm tay hoặc lập trình máy tính mới có thể giải quyết được nội dung bài tập đó.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ý nghĩa phương pháp luận và Bài học vận dụng */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><Star size={32} /> Ý Nghĩa Phương Pháp Luận và Bài Học Vận Dụng</h3>
        
        <p className="text-black opacity-80 mb-6">
          Từ mối quan hệ trên, chúng ta rút ra 3 bài học thực tế sau:
        </p>

        {/* Bài học 1 */}
        <div className="mb-8 border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
          <h4 className="text-2xl font-bold text-black mb-3">Bài Học 1: Muốn Thay Đổi Kết Quả, Phải Tác Động Vào Nội Dung</h4>
          <div className="space-y-3 text-black opacity-80">
            <p>
              <strong>Lý luận:</strong> Vì nội dung quyết định hình thức, nên muốn sự vật biến đổi thực sự, ta phải tập trung thay đổi các yếu tố bên trong nó.
            </p>
            <p>
              <strong>Vận dụng:</strong> Muốn một công ty phát triển, phải cải tiến công nghệ, nâng cao trình độ nhân viên (nội dung), chứ không phải chỉ là thay đổi logo hay sơn lại văn phòng (hình thức bên ngoài).
            </p>
          </div>
        </div>

        {/* Bài học 2 */}
        <div className="mb-8 border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
          <h4 className="text-2xl font-bold text-black mb-3">Bài Học 2: Phải Biết "Thay Áo" Đúng Lúc (Cải Cách Hình Thức)</h4>
          <div className="space-y-3 text-black opacity-80">
            <p>
              <strong>Lý luận:</strong> Khi hình thức không còn phù hợp, nó sẽ cản trở nội dung. Ta cần chủ động can thiệp để thay đổi hình thức.
            </p>
            <p>
              <strong>Vận dụng:</strong> Trong giáo dục, khi kiến thức của học sinh đã nâng cao (nội dung), giáo viên phải thay đổi phương pháp dạy học từ đọc - chép sang thảo luận nhóm (hình thức) để học sinh không bị chán nản và phát triển tốt hơn.
            </p>
          </div>
        </div>

        {/* Bài học 3 */}
        <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
          <h4 className="text-2xl font-bold text-black mb-3">Bài Học 3: Linh Hoạt, Đa Dạng và Tránh Bảo Thủ</h4>
          <div className="space-y-3 text-black opacity-80">
            <p>
              <strong>Lý luận:</strong> Một nội dung có thể có nhiều hình thức thể hiện. Lênin phê phán thái độ bảo thủ, chỉ khư khư giữ cái cũ hoặc thay đổi hình thức một cách tùy tiện.
            </p>
            <p>
              <strong>Vận dụng:</strong> Để truyền tải lòng yêu nước (nội dung), chúng ta có thể dùng nhiều hình thức: viết sách, làm phim, tình nguyện, hoặc đơn giản là học tập tốt. Đừng bắt ép mọi người phải thể hiện theo một kiểu duy nhất.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
