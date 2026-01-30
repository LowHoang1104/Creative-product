import { ArrowLeft, BookOpen, Link2, Star, AlertTriangle, ListChecks, XCircle } from 'lucide-react'
import { contentImages } from '../../constants/images'

export default function PairDetail5() {
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

      <h2 className="text-5xl font-bold text-black mb-4">Bản Chất – Hiện Tượng</h2>
      
      <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#C19A6B' }}>
        <p className="text-black font-semibold">
          Sự phân biệt giữa những gì ta nhìn thấy và những gì thực sự tồn tại
        </p>
      </div>

      <div className="rounded-xl overflow-hidden shadow-lg mb-8">
        <img src={contentImages.pair5} alt="Bản chất - Hiện tượng" className="w-full h-56 object-cover img-warm" />
      </div>

      {/* Định Nghĩa */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><BookOpen size={32} /> Định Nghĩa</h3>
        
        <div className="space-y-4">
          <div className="border-l-4 border-black pl-6">
            <h4 className="text-xl font-bold text-black mb-2">Bản Chất (Essence)</h4>
            <p className="text-black opacity-80">
              Những đặc tính cơ bản, sâu xa, ổn định của sự vật. Nó xác định danh tính của sự vật - cái gì làm cho sự vật là chính nó, không phải sự vật khác. Bản chất là trong, cơ bản, quyết định.
            </p>
            <p className="text-black opacity-70 mt-2 italic">
              Ví dụ: Bản chất của nước là H₂O | Bản chất của con người là có lý trí, có tư duy
            </p>
          </div>

          <div className="border-l-4 border-black pl-6">
            <h4 className="text-xl font-bold text-black mb-2">Hiện Tượng (Phenomenon)</h4>
            <p className="text-black opacity-80">
              Những biểu hiện bên ngoài, có thể thay đổi, có thể được nhận thức trực tiếp qua các giác quan (nhìn, nghe, sờ, nếm, ngửi). Hiện tượng là bề ngoài, hiển hiện, phong phú.
            </p>
            <p className="text-black opacity-70 mt-2 italic">
              Ví dụ: Hiện tượng của nước là trong suốt, lỏng, không màu, lạnh | Hiện tượng của con người là đi bộ, nói chuyện, tỏ cảm xúc
            </p>
          </div>
        </div>
      </section>

      {/* Mối Liên Hệ */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><Link2 size={32} /> Mối Liên Hệ Giữa Bản Chất và Hiện Tượng</h3>
        
        <div className="space-y-4 text-black opacity-80">
          <div className="bg-yellow-50 p-4 rounded" style={{ backgroundColor: '#f0ebe3' }}>
            <p className="font-semibold text-black mb-2">💡 Quy Luật Cơ Bản:</p>
            <p>
              <strong>Bản chất biểu hiện qua hiện tượng.</strong> Bạn không thể thấy bản chất trực tiếp, chỉ có thể thấy những biểu hiện (hiện tượng). Nhưng từ những hiện tượng, bạn có thể suy đoán ra bản chất.
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-bold text-black mb-2">Sự bổ sung:</h4>
            <p>
              Bản chất phải biểu hiện qua hiện tượng, còn hiện tượng phản ánh bản chất. Chúng không thể tách rời.
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-bold text-black mb-2">Sự ổn định và thay đổi:</h4>
            <p>
              Bản chất ổn định, còn hiện tượng có thể thay đổi. Mặc dù hiện tượng thay đổi, nhưng bản chất vẫn không thay. Ví dụ: Nước có thể là lỏng, rắn (đá), hoặc khí (hơi nước) - hiện tượng khác nhau, nhưng bản chất (H₂O) vẫn như nhau.
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-bold text-black mb-2">Sự lúa dối:</h4>
            <p>
              Hiện tượng có thể lừa dối - nhìn vào hiện tượng không đúng là không thể suy ra bản chất chính xác. Cần phân tích, nghiên cứu sâu hơn.
            </p>
          </div>
        </div>
      </section>

      {/* Ví Dụ Thực Tế */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><Star size={32} /> Ví Dụ Thực Tế</h3>
        
        <div className="space-y-6">
          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="font-bold text-black mb-2">Ví Dụ 1: Cuốn Sách</h4>
            <div className="text-black opacity-80">
              <p><strong>Hiện tượng (có thể nhìn thấy):</strong> Bìa sách dày 300 trang, màu xanh, có hình ảnh minh họa, nặng 500g</p>
              <p className="mt-2">→ <strong>Bản chất (cần phân tích):</strong> Là công cụ để truyền tải tri thức, ý tưởng</p>
              <p className="mt-2 italic text-sm">Bạn có thể thấy bìa, nhưng chỉ khi đọc mới hiểu bản chất của nó</p>
            </div>
          </div>

          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="font-bold text-black mb-2">Ví Dụ 2: Con Vàng Và Con Bạc</h4>
            <div className="text-black opacity-80">
              <p><strong>Hiện tượng (có thể nhìn thấy):</strong> Con vàng trông sang trọng, con bạc trông bình thường</p>
              <p className="mt-2">→ <strong>Bản chất (cần suy đoán):</strong> Cả hai đều là kim loại quý, đều có giá trị cao</p>
              <p className="mt-2">Hiện tượng lừa dối người không biết: Không phải cái "đẹp" ngoài mắt là có giá trị cao</p>
            </div>
          </div>

          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="font-bold text-black mb-2">Ví Dụ 3: Nước</h4>
            <div className="text-black opacity-80">
              <p><strong>Hiện tượng (có thể nhìn thấy):</strong></p>
              <p className="ml-4">- Nước lỏng trong suốt, không màu, lạnh</p>
              <p className="ml-4">- Đá - rắn, trắng, cứng</p>
              <p className="ml-4">- Hơi nước - vô hình, nóng</p>
              <p className="mt-2">→ <strong>Bản chất (không đổi):</strong> H₂O - ba trạng thái khác nhau nhưng cùng một bản chất</p>
            </div>
          </div>

          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="font-bold text-black mb-2">Ví Dụ 4: Con Người</h4>
            <div className="text-black opacity-80">
              <p><strong>Hiện tượng (có thể nhìn thấy):</strong> Người lớp thượng thường mặc đẹp, sống trong nhà sang trọng, nói chuyện lịch sự</p>
              <p className="mt-2">→ <strong>Bản chất (cần suy đoán):</strong> Nhưng bản chất là một con người giống như bất cứ ai khác - có lý trí, cần ăn uống, sợ chết</p>
              <p className="mt-2">Hiện tượng ngoài có thể khác nhau, nhưng bản chất của con người vẫn như nhau</p>
            </div>
          </div>

          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="font-bold text-black mb-2">Ví Dụ 5: Bệnh Tật</h4>
            <div className="text-black opacity-80">
              <p><strong>Hiện tượng (có thể nhìn thấy):</strong> Sốt cao, ho, khó thở</p>
              <p className="mt-2">→ <strong>Bản chất (cần chẩn đoán):</strong> Bệnh viêm phổi, nhiễm virus, dị ứng, hay bệnh gì khác?</p>
              <p className="mt-2">Cần chẩn đoán đúng bản chất của bệnh mới có thể chữa trị đúng cách</p>
            </div>
          </div>
        </div>
      </section>

      {/* Khó Khăn Trong Nhận Thức */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><AlertTriangle size={32} /> Khó Khăn Trong Nhận Thức Bản Chất</h3>
        
        <div className="space-y-4 text-black opacity-80">
          <div className="bg-orange-50 p-4 rounded">
            <h4 className="font-bold text-black mb-2">1. Bản chất không dễ thấy</h4>
            <p>
              Bản chất ẩn giấu bên trong, không hiển thị trực tiếp. Bạn chỉ có thể suy đoán từ những hiện tượng. Ví dụ: Không thể thấy trực tiếp "sự suy nhược" của bệnh nhân, chỉ có thể thấy dấu hiệu.
            </p>
          </div>

          <div className="bg-orange-50 p-4 rounded">
            <h4 className="font-bold text-black mb-2">2. Hiện tượng có thể lừa dối</h4>
            <p>
              Những gì ta nhìn thấy có thể không phản ánh chính xác bản chất. Ví dụ: Một người nhìn vào vẻ bề ngoài thân thiện nhưng bản chất là người xấu, hoặc ngược lại.
            </p>
          </div>

          <div className="bg-orange-50 p-4 rounded">
            <h4 className="font-bold text-black mb-2">3. Cần nhiều hiện tượng để hiểu bản chất</h4>
            <p>
              Một hiện tượng duy nhất có thể có nhiều nguyên nhân. Cần nhìn thấy nhiều hiện tượng, từ nhiều góc độ khác nhau mới có thể suy ra bản chất chính xác.
            </p>
          </div>

          <div className="bg-orange-50 p-4 rounded">
            <h4 className="font-bold text-black mb-2">4. Bản chất thường phức tạp</h4>
            <p>
              Bản chất của sự vật không đơn giản, mà là sự kết hợp phức tạp của nhiều yếu tố. Ví dụ: Bản chất của hạnh phúc không chỉ là tiền bạc hay tình yêu.
            </p>
          </div>
        </div>
      </section>

      {/* Ứng Dụng */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><Star size={32} /> Ứng Dụng Thực Tế</h3>
        
        <div className="space-y-4 text-black opacity-80">
          <div>
            <h4 className="font-bold text-black mb-2">1. Trong Y Học</h4>
            <p>
              Bác sĩ không chỉ nhìn vào các triệu chứng (hiện tượng) mà phải chẩn đoán bệnh (bản chất). Cách chữa trị sẽ khác nhau tùy vào bản chất của bệnh, không phải dựa vào hiện tượng.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-black mb-2">2. Trong Pháp Luật</h4>
            <p>
              Thẩm phán không chỉ nhìn vào những lời khai (hiện tượng) mà phải xác định sự thật (bản chất). Bộ luật yêu cầu tìm ra chân tướng của vụ việc.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-black mb-2">3. Trong Kinh Doanh</h4>
            <p>
              Nhà quản lý không chỉ nhìn vào doanh số (hiện tượng) mà phải xác định nguyên nhân thực sự (bản chất). Tăng doanh số một lần có thể do may mắn, nhưng bản chất là sản phẩm tốt hay dịch vụ tốt.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-black mb-2">4. Trong Khoa Học</h4>
            <p>
              Nhà khoa học tìm kiếm các định luật (bản chất) từ những thí nghiệm (hiện tượng). Sự tiến bộ khoa học là quá trình khám phá bản chất của các hiện tượng tự nhiên.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-black mb-2">5. Trong Giáo Dục Cá Nhân</h4>
            <p>
              Hiểu bản chất của sự vật giúp ta hành động đúng đắn hơn. Không bị lừa dối bởi hiện tượng bề ngoài mà nhìn sâu vào bản chất.
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
              <strong className="text-black">Nhầm lẫn hiện tượng với bản chất:</strong> Tưởng rằng nhìn thấy hiện tượng là đã hiểu bản chất. Thực tế cần phân tích, nghiên cứu sâu.
            </div>
          </div>

          <div className="flex gap-4">
            <XCircle size={24} className="text-red-600 flex-shrink-0 mt-1" />
            <div>
              <strong className="text-black">Cho rằng bản chất không thay đổi tuyệt đối:</strong> Bản chất tương đối ổn định nhưng không hoàn toàn cố định. Nó có thể thay đổi qua thời gian dài.
            </div>
          </div>

          <div className="flex gap-4">
            <XCircle size={24} className="text-red-600 flex-shrink-0 mt-1" />
            <div>
              <strong className="text-black">Coi nhẹ vai trò của hiện tượng:</strong> "Hiện tượng chỉ là bề mặt không quan trọng" → Nhưng hiện tượng là cách duy nhất để tiếp cận bản chất.
            </div>
          </div>

          <div className="flex gap-4">
            <XCircle size={24} className="text-red-600 flex-shrink-0 mt-1" />
            <div>
              <strong className="text-black">Bị lừa dối bởi hiện tượng:</strong> "Ai nhìn cao sang là người tốt" → Nhưng hiện tượng bề ngoài không phản ánh bản chất thực sự.
            </div>
          </div>
        </div>
      </section>

      {/* Tóm tắt */}
      <section className="bg-blue-50 p-8 rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><ListChecks size={32} /> Tóm Tắt</h3>
        
        <div className="space-y-3 text-black opacity-80">
          <p>✓ <strong>Bản chất</strong> = Những đặc tính cơ bản, sâu xa, xác định danh tính sự vật</p>
          <p>✓ <strong>Hiện tượng</strong> = Những biểu hiện bên ngoài, có thể được nhận thức qua giác quan</p>
          <p>✓ Bản chất biểu hiện qua hiện tượng, nhưng hiện tượng có thể lừa dối</p>
          <p>✓ Bản chất ổn định, hiện tượng có thể thay đổi</p>
          <p>✓ Hiểu rõ cặp phạm trù này giúp chúng ta <strong>vượt ra ngoài bề mặt để tìm hiểu sự thật</strong></p>
          <p>✓ Cần thực hành nhìn sâu, phân tích, không bị lừa dối bởi hiện tượng</p>
        </div>
      </section>
    </div>
  )
}
