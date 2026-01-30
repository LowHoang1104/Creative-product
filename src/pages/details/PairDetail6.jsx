import { ArrowLeft, BookOpen, Link2, Star, AlertTriangle, ListChecks, XCircle } from 'lucide-react'
import { contentImages } from '../../constants/images'

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

      <div className="rounded-xl overflow-hidden shadow-lg mb-8">
        <img src={contentImages.pair6} alt="Khả năng - Hiện thực" className="w-full h-56 object-cover img-warm" />
      </div>

      {/* 1. Khái niệm */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><BookOpen size={32} /> 1. Khái Niệm</h3>
        
        <div className="space-y-4">
          <div className="border-l-4 border-black pl-6">
            <h4 className="text-xl font-bold text-black mb-2">1.1 Hiện Thực</h4>
            <p className="text-black opacity-80">
              Hiện thực là những gì đang tồn tại thực sự, đã hình thành, đã bộc lộ trong thế giới khách quan.
            </p>
            <div className="bg-gray-50 p-3 rounded mt-2">
              <p className="text-sm text-black opacity-80">
                <strong>Ví dụ:</strong> Bạn hiện đang là sinh viên năm 2, đó là hiện thực.
              </p>
            </div>
          </div>

          <div className="border-l-4 border-black pl-6">
            <h4 className="text-xl font-bold text-black mb-2">1.2 Khả Năng</h4>
            <p className="text-black opacity-80">
              Khả năng là những gì chưa tồn tại, chưa xuất hiện trong hiện thực, nhưng có thể xuất hiện, có thể trở thành hiện thực khi có những điều kiện nhất định.
            </p>
            <div className="bg-gray-50 p-3 rounded mt-2">
              <p className="text-sm text-black opacity-80">
                <strong>Ví dụ:</strong> Bạn có khả năng trở thành sinh viên giỏi trong tương lai.
              </p>
            </div>
          </div>

          <div className="border-l-4 border-yellow-400 pl-6 mt-4" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="text-lg font-bold text-black mb-2">Lưu Ý:</h4>
            <p className="text-black opacity-80">
              Khả năng không phải là tưởng tượng chủ quan, mà nảy sinh từ chính hiện thực.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Mối quan hệ biện chứng giữa khả năng và hiện thực */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><Link2 size={32} /> 2. Mối Quan Hệ Biện Chứng Giữa Khả Năng và Hiện Thực</h3>
        
        <div className="space-y-6 text-black opacity-80">
          {/* Hiện thực chứa đựng khả năng */}
          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="text-xl font-bold text-black mb-3">🔹 Hiện Thực Chứa Đựng Khả Năng</h4>
            <p className="mb-3">
              Trong mỗi hiện thực đều tiềm ẩn những khả năng phát triển mới.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Hiện thực:</strong> Bạn đang học đại học<br/>
                → <strong>chứa khả năng:</strong> có nghề nghiệp tốt, phát triển bản thân.
              </p>
            </div>
          </div>

          {/* Khả năng có thể chuyển hóa thành hiện thực */}
          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="text-xl font-bold text-black mb-3">🔹 Khả Năng Có Thể Chuyển Hóa Thành Hiện Thực</h4>
            <p className="mb-3">
              Khi có điều kiện khách quan và chủ quan phù hợp, khả năng sẽ trở thành hiện thực.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                <div>
                  <p className="font-semibold text-black mb-2">Điều kiện khách quan:</p>
                  <ul className="space-y-1 text-sm ml-4">
                    <li>• Môi trường học tập</li>
                    <li>• Thời gian</li>
                    <li>• Tài liệu</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-black mb-2">Điều kiện chủ quan:</p>
                  <ul className="space-y-1 text-sm ml-4">
                    <li>• Ý thức học tập</li>
                    <li>• Sự cố gắng</li>
                    <li>• Phương pháp đúng</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm">
                <strong>Có khả năng học giỏi</strong> + <strong>học chăm</strong> + <strong>phương pháp đúng</strong> → trở thành sinh viên giỏi.
              </p>
            </div>
          </div>

          {/* Không phải mọi khả năng đều trở thành hiện thực */}
          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="text-xl font-bold text-black mb-3">🔹 Không Phải Mọi Khả Năng Đều Trở Thành Hiện Thực</h4>
            <p className="mb-3">
              Nếu thiếu điều kiện, khả năng chỉ tồn tại ở dạng tiềm năng.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm">
                Nhiều sinh viên có khả năng giỏi, nhưng không nỗ lực → khả năng không thành hiện thực.
              </p>
            </div>
          </div>

          {/* Phân loại khả năng */}
          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="text-xl font-bold text-black mb-3">🔹 Phân Loại Khả Năng (Rất Quan Trọng)</h4>
            <p className="mb-3">
              Theo giáo trình, khả năng gồm:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-black">
                    <th className="text-left p-2 font-bold text-black">Loại khả năng</th>
                    <th className="text-left p-2 font-bold text-black">Đặc điểm</th>
                    <th className="text-left p-2 font-bold text-black">Ví dụ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 font-semibold text-black">Khả năng tất nhiên</td>
                    <td className="p-2">Có cơ sở chắc chắn, dễ thành hiện thực</td>
                    <td className="p-2">Chăm học → điểm cao</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-semibold text-black">Khả năng ngẫu nhiên</td>
                    <td className="p-2">Phụ thuộc may mắn, điều kiện bên ngoài</td>
                    <td className="p-2">Trúng thưởng, cơ hội bất ngờ</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Ý nghĩa phương pháp luận */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><Star size={32} /> 3. Ý Nghĩa Phương Pháp Luận</h3>
        
        <p className="text-black opacity-80 mb-6">
          Từ mối quan hệ này, rút ra các bài học:
        </p>

        <div className="space-y-6 text-black opacity-80">
          {/* Bài học 1 */}
          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="text-xl font-bold text-black mb-2">- Phải Biết Phát Hiện Khả Năng Trong Hiện Thực</h4>
            <p className="mb-2">
              Không nhìn sự vật ở trạng thái tĩnh, mà phải thấy tiềm năng phát triển của nó.
            </p>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-sm">
                <strong>Ví dụ:</strong> Gia đình chưa khá giả không có nghĩa tương lai không thể khá hơn.
              </p>
            </div>
          </div>

          {/* Bài học 2 */}
          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="text-xl font-bold text-black mb-2">- Muốn Biến Khả Năng Thành Hiện Thực Phải Tạo Điều Kiện</h4>
            <p className="mb-2">
              Khả năng không tự biến thành hiện thực nếu không có hành động.
            </p>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-sm">
                <strong>Ví dụ:</strong> Muốn giỏi → phải học và rèn luyện.
              </p>
            </div>
          </div>

          {/* Bài học 3 */}
          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="text-xl font-bold text-black mb-2">- Phải Phân Biệt Khả Năng Tất Nhiên và Khả Năng Ngẫu Nhiên</h4>
            <p>
              Để tập trung vào những khả năng có cơ sở, tránh ảo tưởng.
            </p>
          </div>

          {/* Tránh hai sai lầm */}
          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="text-xl font-bold text-black mb-3">- Tránh Hai Sai Lầm</h4>
            <div className="bg-red-50 p-4 rounded-lg overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-black">
                    <th className="text-left p-2 font-bold text-black">Sai lầm</th>
                    <th className="text-left p-2 font-bold text-black">Biểu hiện</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 font-semibold text-black">Bi quan</td>
                    <td className="p-2">Cho rằng hiện thực hiện tại là cố định</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-semibold text-black">Ảo tưởng</td>
                    <td className="p-2">Tin rằng có khả năng là đủ, không cần cố gắng</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Ví dụ tổng hợp */}
          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="text-xl font-bold text-black mb-3">- Ví Dụ Tổng Hợp Dễ Hiểu:</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="mb-2"><strong>Hiện thực:</strong> Bạn học lực trung bình.</p>
              <p className="mb-2"><strong>Khả năng:</strong> Bạn có thể đạt loại giỏi.</p>
              <p className="mb-2"><strong>Nhưng điều đó chỉ xảy ra khi:</strong></p>
              <ul className="ml-4 space-y-1 text-sm">
                <li>+ Bạn thay đổi phương pháp học</li>
                <li>+ Quản lý thời gian tốt</li>
                <li>+ Tăng thời gian tự học</li>
              </ul>
              <p className="mt-2 text-sm italic">
                Nếu không → khả năng mãi chỉ là "có thể".
              </p>
            </div>
          </div>

          {/* Rút ra kết luận */}
          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="text-xl font-bold text-black mb-3">- Rút Ra Kết Luận:</h4>
            <ul className="space-y-2 ml-4">
              <li>+ Hiện thực luôn chứa đựng khả năng.</li>
              <li>+ Khả năng có thể trở thành hiện thực khi có đủ điều kiện.</li>
              <li>+ Con người phải chủ động tạo điều kiện để biến khả năng thành hiện thực.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
