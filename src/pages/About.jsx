import { Lightbulb, Brain, Beaker, Users } from 'lucide-react'
import { contentImages } from '../constants/images'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-black mb-8">Giới Thiệu</h2>

      <div className="rounded-xl overflow-hidden shadow-lg mb-8">
        <img src={contentImages.aboutMain} alt="Sách và tri thức" className="w-full h-56 object-cover img-warm" />
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-2xl font-bold text-black mb-4">Cặp Phạm Trù là gì?</h3>
        <p className="text-black opacity-80 leading-relaxed mb-4">
          Cặp phạm trù là những khái niệm đối lập, bổ sung cho nhau xuất hiện trong tự nhiên, xã hội và tư duy. Chúng không hoàn toàn đối nghịch mà luôn có mối liên hệ nội tại, mỗi bên phản ánh một khía cạnh của thực tế.
        </p>
        <p className="text-black opacity-80 leading-relaxed">
          Ví dụ: <strong>Ánh sáng và Bóng tối</strong> - Chúng đối lập nhưng không thể tách rời. Nơi có ánh sáng là nơi bóng tối bị loại trừ, và ngược lại. Cả hai cùng tạo nên thực tế ba chiều mà chúng ta nhận thức.
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <div className="rounded-xl overflow-hidden mb-6">
          <img src={contentImages.aboutLight} alt="Ánh sáng và nhận thức" className="w-full h-48 object-cover img-warm" />
        </div>
        <h3 className="text-2xl font-bold text-black mb-4">Vai Trò của Cặp Phạm Trù</h3>
        
        <div className="space-y-6">
          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="font-bold text-black mb-2 flex items-center gap-2"><Brain size={20} /> 1. Trong Nhận Thức</h4>
            <p className="text-black opacity-80">
              Cặp phạm trù giúp chúng ta hiểu rõ hơn về bản chất của sự vật. Bằng cách nhìn từ hai khía cạnh đối lập, ta có cái nhìn toàn diện hơn về hiện tượng cần nghiên cứu.
            </p>
          </div>

          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="font-bold text-black mb-2 flex items-center gap-2"><Beaker size={20} /> 2. Trong Khoa Học</h4>
            <p className="text-black opacity-80">
              Nhiều khám phá khoa học dựa trên các cặp phạm trù: Âm-Dương trong vật lý (Electron-Positron), Tiến hóa-Tuyển chọn tự nhiên trong sinh học.
            </p>
          </div>

          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="font-bold text-black mb-2 flex items-center gap-2"><Users size={20} /> 3. Trong Đời Sống</h4>
            <p className="text-black opacity-80">
              Hiểu biết về cặp phạm trù giúp chúng ta cân bằng cuộc sống, đưa ra quyết định sáng suốt, và chấp nhận những mâu thuẫn tự nhiên của thế giới.
            </p>
          </div>

          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="font-bold text-black mb-2 flex items-center gap-2"><Lightbulb size={20} /> 4. Trong Phát Triển Tư Duy</h4>
            <p className="text-black opacity-80">
              Học về cặp phạm trù rèn luyện khả năng tư duy phản biện, giúp ta vượt ra ngoài nhị phân đơn thuần và nhìn nhận các vấn đề một cách sâu sắc hơn.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 rounded-lg flex items-start gap-3" style={{ backgroundColor: '#C19A6B' }}>
        <Lightbulb size={24} className="flex-shrink-0 mt-0.5" />
        <p className="text-black font-semibold">
          Lưu ý: Cặp phạm trù không phải là những tuyệt đối mà là những khái niệm tương đối, luôn phát triển và thay đổi theo bối cảnh.
        </p>
      </div>
    </div>
  )
}
