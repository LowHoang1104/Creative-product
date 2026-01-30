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

      {/* 1. Khái niệm */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><BookOpen size={32} /> 1. Khái Niệm</h3>
        
        <div className="space-y-4">
          <div className="border-l-4 border-black pl-6">
            <h4 className="text-xl font-bold text-black mb-2">Bản Chất</h4>
            <p className="text-black opacity-80 mb-2">
              Là phạm trù chỉ tổng hợp những mối liên hệ tất nhiên, tương đối ổn định, bên trong của sự vật, hiện tượng, quy định sự tồn tại, vận động và phát triển của sự vật, hiện tượng đó.
            </p>
            <p className="text-black opacity-70 italic">
              → Bản chất thường không bộc lộ trực tiếp, phải thông qua hiện tượng mới nhận thức được.
            </p>
          </div>

          <div className="border-l-4 border-black pl-6">
            <h4 className="text-xl font-bold text-black mb-2">Hiện Tượng</h4>
            <p className="text-black opacity-80 mb-2">
              Là phạm trù chỉ những biểu hiện ra bên ngoài của sự vật, hiện tượng, thông qua đó bản chất được bộc lộ.
            </p>
            <p className="text-black opacity-70 italic">
              → Hiện tượng đa dạng, phong phú, có thể thay đổi nhanh hơn bản chất.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mt-4">
            <p className="font-semibold text-black mb-2">Ví dụ:</p>
            <div className="space-y-2 text-black opacity-80">
              <p><strong>Hiện tượng:</strong> Sinh viên đạt điểm cao, điểm thấp, đi học đầy đủ hay nghỉ học nhiều.</p>
              <p><strong>Bản chất:</strong> Trình độ nhận thức, ý thức học tập, phương pháp học tập, năng lực tư duy của sinh viên.</p>
              <p className="text-sm italic">Một sinh viên có thể đi học đầy đủ (hiện tượng) nhưng nếu phương pháp học tập kém (bản chất) thì kết quả vẫn không cao.</p>
            </div>
          </div>

          <div className="border-l-4 border-yellow-400 pl-6 mt-4" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="text-lg font-bold text-black mb-2">Phân Biệt Hiện Tượng Với Biểu Hiện Bề Ngoài Ngẫu Nhiên</h4>
            <p className="text-black opacity-80 mb-2">
              Không phải mọi cái ta quan sát được đều phản ánh đúng bản chất. Có những hiện tượng chỉ là biểu hiện bên ngoài, nhất thời, có thể che giấu hoặc làm sai lệch bản chất.
            </p>
            <div className="bg-gray-50 p-3 rounded mt-2">
              <p className="text-sm text-black opacity-80">
                <strong>Ví dụ:</strong> Một sinh viên đạt điểm cao trong một kỳ thi có thể do học tủ hoặc may mắn, nhưng điều đó chưa phản ánh đúng bản chất năng lực thực sự của sinh viên đó.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mối quan hệ giữa bản chất và hiện tượng */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><Link2 size={32} /> 2. Mối Quan Hệ Giữa Bản Chất và Hiện Tượng</h3>
        
        {/* a. Bản chất quyết định hiện tượng */}
        <div className="mb-8">
          <h4 className="text-2xl font-bold text-black mb-4">a. Bản Chất Quyết Định Hiện Tượng</h4>
          
          <div className="space-y-4 text-black opacity-80">
            <p>
              Bản chất là cái quyết định hiện tượng, còn hiện tượng là sự biểu hiện của bản chất ra bên ngoài.
            </p>
            <p>
              Mỗi sự vật chỉ có một bản chất nhất định, nhưng có thể biểu hiện ra nhiều hiện tượng khác nhau trong những điều kiện khác nhau.
            </p>
            <p className="italic">
              → Vì bản chất tồn tại bên trong nên không phải lúc nào cũng dễ nhận ra, còn hiện tượng thì dễ quan sát hơn.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p className="font-semibold text-black mb-2">Ví dụ: Bản chất của một người lương thiện, tốt bụng.</p>
              <ul className="space-y-1 ml-4 text-sm">
                <li>• Khi nhặt được của rơi họ sẽ cố gắng trả lại người làm mất.</li>
                <li>• Khi ai đó gặp khó khăn họ cũng sẽ giúp đỡ.</li>
              </ul>
              <p className="mt-2 text-sm italic">
                → Dù hình thức hành động thay đổi, bản chất tốt vẫn tạo ra những hiện tượng tích cực khác nhau.
              </p>
            </div>
          </div>
        </div>

        {/* b. Hiện tượng phản ánh bản chất */}
        <div className="mb-8">
          <h4 className="text-2xl font-bold text-black mb-4">b. Hiện Tượng Phản Ánh Bản Chất</h4>
          
          <div className="space-y-4 text-black opacity-80">
            <p>
              Hiện tượng là con đường để con người nhận thức bản chất.
            </p>
            <p>
              Thông qua việc quan sát, phân tích nhiều hiện tượng khác nhau, con người có thể từng bước tiếp cận và hiểu đúng bản chất của sự vật.
            </p>
            <p className="font-semibold">Tuy nhiên:</p>
            <ul className="ml-4 space-y-2">
              <li>• Hiện tượng có thể phản ánh đúng bản chất,</li>
              <li>• Nhưng cũng có thể phản ánh sai lệch hoặc không đầy đủ bản chất, đặc biệt trong những điều kiện phức tạp.</li>
            </ul>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p className="font-semibold text-black mb-2">Ví dụ: Một người giúp đỡ bạn.</p>
              <div className="space-y-2 text-sm">
                <p>• Nếu chỉ nhìn hiện tượng → có thể kết luận họ là người tốt bụng, sẵn sàng giúp đỡ người khác.</p>
                <p>• Nhưng khi tìm hiểu bản chất → có thể họ chỉ giúp để lợi dụng bạn, làm việc xấu với bạn.</p>
              </div>
              <p className="mt-2 text-sm italic">
                → Hiện tượng chưa phản ánh đầy đủ bản chất nếu chưa được xem xét toàn diện.
              </p>
            </div>
          </div>
        </div>

        {/* c. Mối quan hệ thống nhất nhưng không đồng nhất */}
        <div>
          <h4 className="text-2xl font-bold text-black mb-4">c. Mối Quan Hệ Thống Nhất Nhưng Không Đồng Nhất Giữa Bản Chất và Hiện Tượng</h4>
          
          <div className="space-y-4 text-black opacity-80">
            <p>
              <strong>Bản chất và hiện tượng thống nhất với nhau:</strong> Không có bản chất nào tồn tại mà không biểu hiện ra hiện tượng, và không có hiện tượng nào lại không phản ánh một bản chất nhất định.
            </p>
            <p>
              <strong>Nhưng chúng không đồng nhất:</strong> Bản chất là cái bên trong, ổn định, còn hiện tượng là cái bên ngoài, biến đổi.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p className="font-semibold text-black mb-2">Ví dụ: Trong một lớp học</p>
              <div className="space-y-2 text-sm">
                <p>• Có sinh viên nói ít, ít phát biểu (hiện tượng).</p>
                <p>• Nhưng bản chất có thể là tư duy sâu, học tập nghiêm túc, chỉ không thích thể hiện.</p>
              </div>
              <p className="mt-2 text-sm italic">
                → Nếu chỉ đánh giá qua hiện tượng bề ngoài sẽ dễ hiểu sai bản chất.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Ý nghĩa phương pháp luận */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><Star size={32} /> 3. Ý Nghĩa Phương Pháp Luận</h3>
        
        <div className="space-y-6 text-black opacity-80">
          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <p className="mb-3">
              Do bản chất quyết định hiện tượng, nên trong nhận thức và hoạt động thực tiễn, con người không được dừng lại ở hiện tượng bề ngoài, mà phải đi sâu tìm hiểu bản chất của sự vật, hiện tượng.
            </p>
          </div>

          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <p className="mb-3">
              Vì hiện tượng phong phú, đa dạng và có thể che giấu bản chất, nên muốn nhận thức đúng bản chất cần xem xét nhiều hiện tượng, trong những điều kiện, hoàn cảnh khác nhau, tránh suy luận chủ quan, phiến diện.
            </p>
          </div>

          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <p className="mb-3">
              Trong hoạt động thực tiễn, cần:
            </p>
            <ul className="ml-4 space-y-2">
              <li>• Tôn trọng bản chất khách quan của sự vật,</li>
              <li>• Tác động vào bản chất, không chỉ thay đổi hình thức hay biểu hiện bề ngoài.</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-semibold text-black mb-2">Ví dụ: Muốn nâng cao chất lượng học tập của sinh viên:</p>
            <ul className="ml-4 space-y-2 text-sm">
              <li>• Không chỉ chú trọng hiện tượng như điểm số hay tỷ lệ lên lớp,</li>
              <li>• Mà cần tác động vào bản chất như: phương pháp giảng dạy, ý thức tự học, môi trường học tập.</li>
            </ul>
            <p className="mt-2 text-sm italic">
              → Chỉ khi thay đổi đúng bản chất thì hiện tượng tích cực mới xuất hiện bền vững.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
