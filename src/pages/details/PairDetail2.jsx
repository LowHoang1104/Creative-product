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

      {/* 1. Khái niệm */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><BookOpen size={32} /> 1. Khái Niệm</h3>
        
        <div className="space-y-4">
          <div className="border-l-4 border-black pl-6">
            <h4 className="text-xl font-bold text-black mb-2">Nguyên Nhân</h4>
            <p className="text-black opacity-80">
              Nguyên nhân là phạm trù chỉ sự tương tác lẫn nhau giữa các yếu tố trong một sự vật, hiện tượng hoặc giữa các sự vật, hiện tượng với nhau gây ra những biến đổi nhất định.
            </p>
          </div>

          <div className="border-l-4 border-black pl-6">
            <h4 className="text-xl font-bold text-black mb-2">Kết Quả</h4>
            <p className="text-black opacity-80">
              Kết quả là phạm trù chỉ những biến đổi xuất hiện do sự tương tác giữa các yếu tố mang tính nguyên nhân gây nên.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mt-4">
            <p className="text-black opacity-80 mb-3">
              <strong>Ví dụ:</strong> Sinh viên học tập chăm chỉ thì đạt điểm cao. Học tập chăm chỉ là một hiện tượng, bên trong nó tồn tại những yếu tố như: động cơ, thái độ học tập, môi trường học tập,... những yếu tố này tác động lẫn nhau, chính sự tương tác đó tạo ra kết quả là sinh viên đạt điểm cao.
            </p>
          </div>

          <div className="border-l-4 border-black pl-6 mt-4">
            <h4 className="text-xl font-bold text-black mb-2">Nguyên Cớ</h4>
            <p className="text-black opacity-80">
              Là sự kiện xảy ra ngay trước kết quả nhưng nó không phải là nguyên nhân gốc rễ, mang tính ngẫu nhiên, có thể dùng nguyên cớ để che đậy nguyên nhân.
            </p>
          </div>

          <div className="border-l-4 border-black pl-6">
            <h4 className="text-xl font-bold text-black mb-2">Điều Kiện</h4>
            <p className="text-black opacity-80">
              Là những yếu tố, hoàn cảnh giúp cho nguyên nhân có thể hoạt động và tạo ra kết quả. Điều kiện không trực tiếp sinh ra kết quả, nhưng nếu không có điều kiện phù hợp thì nguyên nhân cũng khó phát huy tác dụng.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Mối quan hệ giữa nguyên nhân và kết quả */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><Link2 size={32} /> 2. Mối Quan Hệ Giữa Nguyên Nhân và Kết Quả</h3>
        
        {/* a. Nguyên nhân sản sinh ra kết quả */}
        <div className="mb-8">
          <h4 className="text-2xl font-bold text-black mb-4">a. Nguyên Nhân Sản Sinh Ra Kết Quả</h4>
          
          <div className="space-y-4 text-black opacity-80">
            <p>
              Nguyên nhân là cái sinh ra kết quả, nên nguyên nhân luôn có trước kết quả. Còn kết quả chỉ xuất hiện sau khi nguyên nhân xuất hiện và bắt đầu tác động. Tuy nhiên, không phải sự nối tiếp nào trong thời gian của các hiện tượng cũng đều biểu hiện mối liên hệ nhân quả.
            </p>

            <p>
              Cùng một nguyên nhân có thể gây ra nhiều kết quả khác nhau tùy thuộc vào hoàn cảnh cụ thể. Ngược lại, cùng một kết quả có thể được gây nên bởi những nguyên nhân khác nhau. Các nguyên nhân khác nhau tác động lên sự vật theo các hướng khác nhau thì sẽ làm suy yếu, thậm chí triệt tiêu các tác dụng của nhau.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg mt-4">
              <p className="font-semibold text-black mb-3">Căn cứ vào tính chất, vai trò của nguyên nhân đối với sự hình thành kết quả, có thể phân loại nguyên nhân thành:</p>
              <ul className="space-y-2 ml-4 text-black opacity-80">
                <li>• <strong>Nguyên nhân chủ yếu</strong> và <strong>nguyên nhân thứ yếu</strong></li>
                <li>• <strong>Nguyên nhân bên trong</strong> và <strong>nguyên nhân bên ngoài</strong></li>
                <li>• <strong>Nguyên nhân khách quan</strong> và <strong>nguyên nhân chủ quan</strong></li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p className="font-semibold text-black mb-2">Ví dụ:</p>
              <p className="text-black opacity-80">
                Kết quả học tập cao của một học sinh trước hết do nguyên nhân chủ yếu là học tập chăm chỉ. Tuy nhiên, cùng một nguyên nhân này có thể dẫn đến các kết quả khác nhau tùy hoàn cảnh, như học đúng phương pháp thì điểm cao, học sai cách thì kết quả chỉ trung bình. Ngược lại, cùng một kết quả điểm cao cũng có thể do nhiều nguyên nhân khác nhau như năng lực cá nhân, sự hỗ trợ của gia đình hay thầy cô. Trong đó, ý thức và năng lực của học sinh là nguyên nhân bên trong, còn môi trường học tập là nguyên nhân bên ngoài.
              </p>
            </div>
          </div>
        </div>

        {/* b. Sự tác động trở lại của kết quả đối với nguyên nhân */}
        <div className="mb-8">
          <h4 className="text-2xl font-bold text-black mb-4">b. Sự Tác Động Trở Lại Của Kết Quả Đối Với Nguyên Nhân</h4>
          
          <div className="space-y-4 text-black opacity-80">
            <p>
              Nguyên nhân sản sinh ra kết quả. Nhưng sau khi xuất hiện, kết quả không giữ vai trò thụ động đối với nguyên nhân, mà sẽ có ảnh hưởng tích cực trở lại đối với nguyên nhân.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p className="font-semibold text-black mb-2">Ví dụ: Kết quả học tập tác động trở lại nguyên nhân</p>
              <p className="text-black opacity-80">
                Học sinh học tập chăm chỉ là nguyên nhân dẫn đến kết quả đạt điểm cao trong kỳ thi. Tuy nhiên, sau khi có kết quả tốt, điểm cao lại tác động trở lại nguyên nhân: nó tạo động lực, sự tự tin và hứng thú học tập cho học sinh, khiến các em tiếp tục học chăm chỉ hơn trong những lần sau. Ngược lại, nếu kết quả thấp, học sinh có thể nản lòng, từ đó làm giảm sự cố gắng học tập.
              </p>
            </div>
          </div>
        </div>

        {/* c. Sự thay đổi vị trí giữa nguyên nhân và kết quả */}
        <div>
          <h4 className="text-2xl font-bold text-black mb-4">c. Sự Thay Đổi Vị Trí Giữa Nguyên Nhân và Kết Quả</h4>
          
          <div className="space-y-4 text-black opacity-80">
            <p>
              Điều này xảy ra khi ta xem xét sự vật, hiện tượng trong các mối quan hệ khác nhau. Một hiện tượng nào đó trong mối quan hệ này là nguyên nhân thì trong mối quan hệ khác là kết quả và ngược lại.
            </p>

            <p>
              Một hiện tượng nào đó là kết quả do một nguyên nhân nào đó sinh ra, đến lượt mình sẽ trở thành nguyên nhân sinh ra hiện tượng thứ ba... Và quá trình này tiếp tục mãi không bao giờ kết thúc, tạo nên một chuỗi nhân quả vô cùng tận. Trong chuỗi đó không có khâu nào là bắt đầu hay cuối cùng.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p className="font-semibold text-black mb-2">Ví dụ: Quá trình học tập của học sinh</p>
              <p className="text-black opacity-80">
                Việc học tập chăm chỉ là nguyên nhân dẫn đến kết quả là học sinh đạt điểm cao. Tuy nhiên, trong mối quan hệ tiếp theo, điểm cao lại trở thành nguyên nhân tạo ra hiện tượng mới là học sinh có thêm động lực, tự tin hơn trong học tập. Động lực này tiếp tục trở thành nguyên nhân khiến học sinh học tập nghiêm túc hơn nữa, từ đó lại sinh ra kết quả học tập ngày càng tốt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Ý nghĩa phương pháp luận */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><Star size={32} /> 3. Ý Nghĩa Phương Pháp Luận</h3>
        
        <div className="space-y-4 text-black opacity-80">
          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <p className="mb-3">
              Mối liên hệ nhân quả có tính chất khách quan và tính phổ biến, nghĩa là không có sự vật, hiện tượng nào trong thế giới vật chất lại không có nguyên nhân. Nhưng không phải con người có thể nhận thức ngay được nguyên nhân. Nhiệm vụ của nhận thức khoa học là phải tìm ra nguyên nhân của những hiện tượng trong tự nhiên, xã hội và tư duy để giải thích được những hiện tượng đó. Muốn tìm nguyên nhân phải tìm trong thế giới hiện thực, trong bản thân các sự vật, hiện tượng tồn tại trong thế giới vật chất chứ không được tưởng tượng ra từ đầu óc con người, tách rời với thế giới hiện thực.
            </p>
          </div>

          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <p className="mb-3">
              Vì nguyên nhân luôn có trước kết quả nên muốn tìm nguyên nhân của một hiện tượng nào đấy cần tìm trong những sự kiện những mối liên hệ xảy ra trước khi hiện tượng đó xuất hiện. Một kết quả có thể do nhiều nguyên nhân sinh ra. Những nguyên nhân này có vai trò khác nhau đối với việc hình thành kết quả. Vì vậy trong hoạt động thực tiễn của chúng ta cần phân loại nguyên nhân, tìm ra nguyên nhân cơ bản, nguyên nhân khách quan,... Đồng thời phải nắm bắt được chiều hướng tác động của các nguyên nhân, từ đó có biện pháp thích hợp tạo điều kiện cho nguyên nhân có tác động tích cực đến hoạt động và hạn chế sự hoạt động của nguyên nhân có tác động tiêu cực.
            </p>
          </div>

          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <p>
              Kết quả tác động trở lại nguyên nhân. Vì vậy, trong hoạt động thực tiễn chúng ta cần phải khai thác, tận dụng các kết quả đã đạt được để tạo điều kiện thúc đẩy nguyên nhân phát huy tác dụng, nhằm đạt mục đích.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
