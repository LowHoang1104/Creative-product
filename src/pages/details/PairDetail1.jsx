import { ArrowLeft, BookOpen, Link2, Star, AlertTriangle, ListChecks, XCircle } from 'lucide-react'
import { contentImages } from '../../constants/images'

export default function PairDetail1() {
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

      <h2 className="text-5xl font-bold text-black mb-4">Cái Chung – Cái Riêng (và Cái Đơn Nhất)</h2>
      
      <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#C19A6B' }}>
        <p className="text-black font-semibold">
          Khái niệm cái riêng, cái chung và cái đơn nhất với tư cách là phạm trù cơ bản của phép biện chứng duy vật
        </p>
      </div>

      <div className="rounded-xl overflow-hidden shadow-lg mb-8">
        <img src={contentImages.pair1} alt="Cái chung - Cái riêng" className="w-full h-56 object-cover img-warm" />
      </div>

      {/* Khái niệm */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><BookOpen size={32} /> Khái Niệm Cái Riêng, Cái Chung và Cái Đơn Nhất</h3>
        <p className="text-black opacity-70 mb-6 italic">Với tư cách là phạm trù cơ bản của phép biện chứng duy vật</p>
        
        <div className="space-y-4">
          <div className="border-l-4 border-black pl-6">
            <h4 className="text-xl font-bold text-black mb-2">Cái Riêng</h4>
            <p className="text-black opacity-80">
              Dùng để chỉ mỗi sự vật, mỗi hiện tượng, mỗi quá trình,... xác định, tồn tại tương đối độc lập so với các sự vật, hiện tượng, quá trình... khác.
            </p>
          </div>

          <div className="border-l-4 border-black pl-6">
            <h4 className="text-xl font-bold text-black mb-2">Cái Chung</h4>
            <p className="text-black opacity-80">
              Dùng để chỉ những thuộc tính, tính chất,... lặp lại ở nhiều cái riêng.
            </p>
          </div>

          <div className="border-l-4 border-black pl-6">
            <h4 className="text-xl font-bold text-black mb-2">Cái Đơn Nhất</h4>
            <p className="text-black opacity-80">
              Dùng để chỉ những thuộc tính, tính chất,... chỉ tồn tại ở một cái riêng nhất định.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mt-4">
            <p className="text-black opacity-80">
              <strong>Ví dụ:</strong> Mỗi con người là một cái riêng; những thuộc tính tự nhiên và xã hội khiến cho con người khác với động vật giữ vai trò là cái chung của tất cả mọi người với tư cách người; nhưng mặt khác, ở mỗi con người lại có những thuộc tính không lặp lại ở nhau như: cấu tạo gen, nhân cách, năng lực,... cụ thể khác nhau.
            </p>
          </div>
        </div>
      </section>

      {/* Mối quan hệ biện chứng */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><Link2 size={32} /> Mối Quan Hệ Biện Chứng Giữa Cái Chung, Cái Riêng và Cái Đơn Nhất</h3>
        
        <div className="space-y-6 text-black opacity-80">
          {/* Điểm 1 */}
          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="text-xl font-bold text-black mb-3">1. Cái Chung Tồn Tại Trong Cái Riêng</h4>
            <p className="mb-3">
              Cái chung không tồn tại trừu tượng bên ngoài những cái riêng; trái lại, cái chung chỉ tồn tại trong mỗi cái riêng, biểu hiện thông qua mỗi cái riêng. Vì vậy, để nhận thức cái chung có thể dùng phương pháp quy nạp từ việc nghiên cứu nhiều cái riêng.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Ví dụ:</strong> Trên cơ sở khảo sát tình hình hoạt động cụ thể của một số doanh nghiệp có thể rút ra kết luận về tình trạng chung của các doanh nghiệp trong nền kinh tế.
              </p>
            </div>
          </div>

          {/* Điểm 2 */}
          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="text-xl font-bold text-black mb-3">2. Cái Riêng Tồn Tại Trong Mối Quan Hệ Với Cái Chung</h4>
            <p className="mb-3">
              Cái riêng chỉ tồn tại trong mối quan hệ với cái chung; không có cái riêng tồn tại độc lập tuyệt đối tách rời cái chung. Vì vậy, để giải quyết mỗi vấn đề riêng không thể bất chấp cái chung, đặc biệt là cái chung là cái thuộc bản chất, quy luật phổ biến...
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Ví dụ:</strong> Không có doanh nghiệp nào tồn tại với tư cách doanh nghiệp mà lại không tuân theo các quy tắc chung của thị trường (ví dụ quy tắc cạnh tranh...). Nếu doanh nghiệp nào đó bất chấp các nguyên tắc chung đó thì nó không thể tồn tại trong nền kinh tế thị trường.
              </p>
            </div>
          </div>

          {/* Điểm 3 */}
          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="text-xl font-bold text-black mb-3">3. Cái Riêng Phong Phú Hơn, Cái Chung Sâu Sắc Hơn</h4>
            <p className="mb-3">
              Cái riêng là cái toàn bộ, phong phú, đa dạng hơn cái chung; còn cái chung là cái bộ phận nhưng sâu sắc, bản chất hơn cái riêng. Vì vậy, chẳng những việc giải quyết mỗi vấn đề riêng không thể bất chấp cái chung mà còn phải xét đến cái phong phú, lịch sử khi vận dụng cái chung.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Ví dụ:</strong> Khi vận dụng những nguyên lý chung của khoa học vào việc giải quyết mỗi vấn đề riêng cần phải xét đến những điều kiện lịch sử, cụ thể tạo nên cái đơn nhất (đặc thù) của nó. Cần tránh thái độ chung chung, trừu tượng khi giải quyết mỗi vấn đề riêng.
              </p>
            </div>
          </div>

          {/* Điểm 4 */}
          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="text-xl font-bold text-black mb-3">4. Sự Chuyển Hóa Giữa Cái Chung và Cái Đơn Nhất</h4>
            <p className="mb-3">
              Cái chung và cái đơn nhất có thể chuyển hóa cho nhau trong những điều kiện xác định của quá trình vận động, phát triển của sự vật. Vì vậy, tùy từng mục đích có thể tạo ra những điều kiện để thực hiện sự chuyển hóa từ cái đơn nhất thành cái chung hay ngược lại.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Ví dụ:</strong> Một sáng kiến khi mới ra đời - nó là cái đơn nhất. Với mục đích nhân rộng sáng kiến đó áp dụng trong thực tiễn phát triển kinh tế - xã hội, có thể thông qua các tổ chức trao đổi, học tập để phổ biến sáng kiến đó thành cái chung, cái phổ biến - khi đó cái đơn nhất đã trở thành cái chung...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ý nghĩa phương pháp luận */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><Star size={32} /> Ý Nghĩa Phương Pháp Luận Của Cái Chung và Cái Riêng</h3>
        
        <p className="text-black opacity-80 mb-6">
          Ý nghĩa phương pháp luận của cặp phạm trù cái chung và cái riêng trong triết học Mác-Lênin rất quan trọng, giúp chúng ta hiểu rõ hơn về bản chất của sự vật, hiện tượng và định hướng trong nghiên cứu khoa học cũng như trong thực tiễn đời sống. Dưới đây là một số ý nghĩa chính:
        </p>

        <div className="space-y-6 text-black opacity-80">
          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="text-xl font-bold text-black mb-2">Giúp Hiểu Rõ Bản Chất Của Sự Vật, Hiện Tượng</h4>
            <p>
              Việc phân tích mối quan hệ giữa cái chung và cái riêng giúp chúng ta nhận biết và phân biệt các đặc điểm chung và riêng của sự vật, hiện tượng. Điều này giúp hiểu sâu hơn về cấu trúc và đặc tính của chúng.
            </p>
          </div>

          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="text-xl font-bold text-black mb-2">Định Hướng Trong Nghiên Cứu Khoa Học</h4>
            <p>
              Phương pháp luận này giúp các nhà khoa học xác định các quy luật chung và riêng của các hiện tượng tự nhiên và xã hội, từ đó đưa ra các giả thuyết và lý thuyết khoa học chính xác hơn.
            </p>
          </div>

          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="text-xl font-bold text-black mb-2">Cơ Sở Cho Việc Phân Loại Và Tổng Hợp Thông Tin</h4>
            <p>
              Nhận biết cái chung và cái riêng giúp chúng ta phân loại và tổng hợp thông tin một cách hệ thống, logic, từ đó dễ dàng hơn trong việc nghiên cứu và ứng dụng vào thực tiễn.
            </p>
          </div>

          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="text-xl font-bold text-black mb-2">Ứng Dụng Trong Thực Tiễn Đời Sống</h4>
            <p>
              Trong quản lý và điều hành, việc hiểu rõ mối quan hệ giữa cái chung và cái riêng giúp đưa ra các quyết định phù hợp với từng hoàn cảnh cụ thể, đảm bảo tính hiệu quả và khả thi.
            </p>
          </div>

          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="text-xl font-bold text-black mb-2">Phát Triển Tư Duy Biện Chứng</h4>
            <p>
              Phương pháp luận này giúp phát triển tư duy biện chứng, tức là khả năng nhìn nhận sự vật, hiện tượng trong mối quan hệ qua lại, tác động lẫn nhau, từ đó có cái nhìn toàn diện và sâu sắc hơn về thế giới xung quanh.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
