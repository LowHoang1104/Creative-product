import { ArrowLeft, BookOpen, Link2, Star, AlertTriangle, ListChecks, XCircle } from 'lucide-react'
import { contentImages } from '../../constants/images'

export default function PairDetail2() {
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

      <h2 className="text-5xl font-bold text-black mb-4">Nguyên Nhân – Kết Quả</h2>
      
      <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#C19A6B' }}>
        <p className="text-black font-semibold">
          Cặp phạm trù cơ bản nhất để hiểu mối liên hệ nhân quả trong tự nhiên và xã hội
        </p>
      </div>

      <div className="rounded-xl overflow-hidden shadow-lg mb-8">
        <img src={contentImages.pair2} alt="Nguyên nhân - Kết quả" className="w-full h-56 object-cover img-warm" />
      </div>

      {/* Định Nghĩa */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><BookOpen size={32} /> Định Nghĩa</h3>
        
        <div className="space-y-4">
          <div className="border-l-4 border-black pl-6">
            <h4 className="text-xl font-bold text-black mb-2">Nguyên Nhân</h4>
            <p className="text-black opacity-80">
              Sự vật, hiện tượng hoặc hoạt động mà từ đó phát sinh sự vật, hiện tượng khác. Nó là lực, tác động, hay hoàn cảnh tạo ra sự thay đổi.
            </p>
            <p className="text-black opacity-70 mt-2 italic">
              Ví dụ: Lửa là nguyên nhân làm nước sôi | Kiến thức là nguyên nhân tạo ra thành công
            </p>
          </div>

          <div className="border-l-4 border-black pl-6">
            <h4 className="text-xl font-bold text-black mb-2">Kết Quả</h4>
            <p className="text-black opacity-80">
              Sự vật, hiện tượng được sinh ra từ nguyên nhân nào đó. Nó là hệ quả, tác động, hoặc sản phẩm của nguyên nhân.
            </p>
            <p className="text-black opacity-70 mt-2 italic">
              Ví dụ: Nước sôi là kết quả của tác động nhiệt | Thành công là kết quả của kiến thức
            </p>
          </div>
        </div>
      </section>

      {/* Quy Luật Nhân Quả */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6">⚡ Quy Luật Nhân Quả</h3>
        
        <div className="space-y-4 text-black opacity-80">
          <p>
            Mọi hiện tượng tự nhiên và xã hội đều có nguyên nhân của nó. Không có hiện tượng nào xảy ra mà không có nguyên nhân, và mỗi nguyên nhân sẽ dẫn đến kết quả tương ứng.
          </p>

          <div className="bg-gray-50 p-4 rounded">
            <p className="font-semibold mb-3">Các đặc điểm của mối quan hệ nhân quả:</p>
            <ul className="space-y-2 ml-4">
              <li>🔄 <strong>Tính chất của nhân quả:</strong> Mỗi nguyên nhân chỉ dẫn đến một loại kết quả nhất định</li>
              <li>⏱️ <strong>Sự tuần tự:</strong> Nguyên nhân luôn xảy ra trước, kết quả xảy ra sau</li>
              <li>🔗 <strong>Tính liên tục:</strong> Kết quả của hiện tượng này lại trở thành nguyên nhân của hiện tượng khác</li>
              <li>🌊 <strong>Tính đa nguyên nhân:</strong> Một kết quả có thể có nhiều nguyên nhân</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Ví Dụ Thực Tế */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><Star size={32} /> Ví Dụ Thực Tế</h3>
        
        <div className="space-y-6">
          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="font-bold text-black mb-2">Ví Dụ 1: Trong Tự Nhiên</h4>
            <div className="text-black opacity-80">
              <p><strong>Nguyên nhân:</strong> Hạt giống được trồng vào đất tốt, được tưới nước, có ánh nắng</p>
              <p className="mt-2">→ <strong>Kết quả:</strong> Cây lớn lên, phát triển, cho hoa và quả</p>
              <p className="mt-2 text-sm italic">→ <strong>Chuỗi nhân quả tiếp tục:</strong> Quả rơi → Hạt mới → Cây mới</p>
            </div>
          </div>

          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="font-bold text-black mb-2">Ví Dụ 2: Trong Học Tập</h4>
            <div className="text-black opacity-80">
              <p><strong>Nguyên nhân:</strong> Chăm học, chú ý lắng nghe, làm bài tập đầy đủ</p>
              <p className="mt-2">→ <strong>Kết quả:</strong> Hiểu bài, ghi nhớ kiến thức, thi đạt điểm cao</p>
            </div>
          </div>

          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="font-bold text-black mb-2">Ví Dụ 3: Trong Xã Hội</h4>
            <div className="text-black opacity-80">
              <p><strong>Nguyên nhân:</strong> Mất việc làm, không có thu nhập</p>
              <p className="mt-2">→ <strong>Kết quả:</strong> Khó khăn trong cuộc sống, phải tìm việc mới</p>
            </div>
          </div>

          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="font-bold text-black mb-2">Ví Dụ 4: Trong Sức Khỏe</h4>
            <div className="text-black opacity-80">
              <p><strong>Nguyên nhân:</strong> Nhiễm virus, hệ miễn dịch suy yếu</p>
              <p className="mt-2">→ <strong>Kết quả:</strong> Bị cảm cúm, sốt, ho</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mối Liên Hệ */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><Link2 size={32} /> Mối Liên Hệ Giữa Nguyên Nhân và Kết Quả</h3>
        
        <div className="space-y-4 text-black opacity-80">
          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-bold text-black mb-2">Sự phụ thuộc hai chiều:</h4>
            <p>
              Nguyên nhân phụ thuộc vào kết quả (để được coi là nguyên nhân, nó phải gây ra kết quả), và kết quả phụ thuộc vào nguyên nhân (không có kết quả mà không có nguyên nhân).
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-bold text-black mb-2">Mối liên hệ không cố định:</h4>
            <p>
              Cùng một nguyên nhân có thể dẫn đến những kết quả khác nhau trong những hoàn cảnh khác nhau. Ví dụ: Hạt giống trong đất tốt sẽ thành cây to, nhưng nếu không tưới nước sẽ chết.
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-bold text-black mb-2">Tính tiến triển:</h4>
            <p>
              Một kết quả có thể trở thành nguyên nhân cho hiện tượng khác, tạo thành chuỗi nhân quả dài. Quá trình này không bao giờ dừng lại.
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
              Các nhà khoa học tìm kiếm nguyên nhân của những hiện tượng để dự đoán kết quả. Ví dụ: Hiểu nguyên nhân của bệnh tật để tìm ra cách chữa trị.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-black mb-2">2. Trong Pháp Luật</h4>
            <p>
              Tòa án phải xác định nguyên nhân (ai gây ra) để xác định trách nhiệm và kết quả (hình phạt). Ví dụ: Bị cáo gây tai nạn → Kết quả là phạt tiền hoặc tù.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-black mb-2">3. Trong Quản Lý</h4>
            <p>
              Để cải thiện kết quả của công ty, cần tìm hiểu nguyên nhân gây ra những vấn đề hiện tại. Ví dụ: Doanh thu giảm → Nguyên nhân là quảng cáo kém hay sản phẩm chất lượng thấp?
            </p>
          </div>

          <div>
            <h4 className="font-bold text-black mb-2">4. Trong Giáo Dục Cá Nhân</h4>
            <p>
              Hiểu rằng những quyết định hôm nay sẽ có kết quả trong tương lai. Chăm học hôm nay → Thành công ngày mai. Lười biếng hôm nay → Thất bại sau này.
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
              <strong className="text-black">Nhầm lẫn giữa nguyên nhân và điều kiện:</strong> Lửa không phải nguyên nhân duy nhất của cháy - cần cả oxy. Cả ba thứ cùng tác động mới gây cháy.
            </div>
          </div>

          <div className="flex gap-4">
            <XCircle size={24} className="text-red-600 flex-shrink-0 mt-1" />
            <div>
              <strong className="text-black">Hoán đổi nguyên nhân và kết quả:</strong> Nước sôi là kết quả chứ không phải nguyên nhân của nhiệt độ cao (nhiệt độ cao là nguyên nhân).
            </div>
          </div>

          <div className="flex gap-4">
            <XCircle size={24} className="text-red-600 flex-shrink-0 mt-1" />
            <div>
              <strong className="text-black">Cho rằng hai sự kiện xảy ra cùng lúc là có quan hệ nhân quả:</strong> Ví dụ: Con gà gáy trước khi mặt trời mọc không phải nguyên nhân của bình minh.
            </div>
          </div>

          <div className="flex gap-4">
            <XCircle size={24} className="text-red-600 flex-shrink-0 mt-1" />
            <div>
              <strong className="text-black">Bỏ qua các nguyên nhân khác:</strong> Bệnh có thể do nhiều nguyên nhân - không chỉ là lạnh mà có thể do mệt mỏi, stress, v.v.
            </div>
          </div>
        </div>
      </section>

      {/* Tóm tắt */}
      <section className="bg-blue-50 p-8 rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><ListChecks size={32} /> Tóm Tắt</h3>
        
        <div className="space-y-3 text-black opacity-80">
          <p>✓ <strong>Nguyên nhân</strong> = Lực hoặc tác động gây ra sự thay đổi</p>
          <p>✓ <strong>Kết quả</strong> = Sự thay đổi do nguyên nhân gây ra</p>
          <p>✓ Không có hiện tượng nào xảy ra mà không có nguyên nhân</p>
          <p>✓ Kết quả của hiện tượng này có thể trở thành nguyên nhân của hiện tượng khác</p>
          <p>✓ Hiểu rõ mối quan hệ nhân quả giúp chúng ta <strong>dự đoán</strong>, <strong>kiểm soát</strong>, và <strong>cải thiện</strong> cuộc sống</p>
        </div>
      </section>
    </div>
  )
}
