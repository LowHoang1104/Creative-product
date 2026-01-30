import { useState } from 'react'
import Accordion from '../components/Accordion'
import { contentImages } from '../constants/images'

export default function CategoryPairs() {
  const [expandedId, setExpandedId] = useState(0)

  const pairs = [
    {
      id: 0,
      title: '1. Cái Chung – Cái Riêng (và Cái Đơn Nhất)',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-black mb-2">Định Nghĩa:</h4>
            <p className="text-black opacity-80">
              <strong>Cái chung:</strong> Những đặc tính, tính chất chung có ở nhiều sự vật khác nhau.<br/>
              <strong>Cái riêng:</strong> Những đặc tính, tính chất chỉ riêng có ở một sự vật nào đó.<br/>
              <strong>Cái đơn nhất:</strong> Một cá thể cụ thể, duy nhất.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-black mb-2">Ví Dụ:</h4>
            <p className="text-black opacity-80">
              <strong>Cái chung:</strong> "Động vật có xương sống" (áp dụng cho cá, rắn, chim, người...)<br/>
              <strong>Cái riêng:</strong> "Người nói được ngôn ngữ" (chỉ người)<br/>
              <strong>Cái đơn nhất:</strong> "Tôi" - một cá nhân cụ thể
            </p>
          </div>
          <div>
            <h4 className="font-bold text-black mb-2">Ý Nghĩa:</h4>
            <p className="text-black opacity-80">
              Hiểu rõ cặp phạm trù này giúp phân loại tri thức, xây dựng hệ thống khái niệm logic, và nhận ra sự đa dạng trong nhất quán.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: '2. Nguyên Nhân – Kết Quả',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-black mb-2">Định Nghĩa:</h4>
            <p className="text-black opacity-80">
              <strong>Nguyên nhân:</strong> Sự vật, hiện tượng hay hoạt động gây ra sự thay đổi, sinh ra sự vật hay hiện tượng khác.<br/>
              <strong>Kết quả:</strong> Sự thay đổi, sự vật hay hiện tượng được sinh ra bởi nguyên nhân nào đó.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-black mb-2">Ví Dụ:</h4>
            <p className="text-black opacity-80">
              <strong>Nguyên nhân:</strong> Hạt giống được trồng vào đất tốt<br/>
              <strong>Kết quả:</strong> Cây lớn lên và cho quả<br/>
              Hay: Để quên hay lập kế hoạch → Thất bại trong công việc
            </p>
          </div>
          <div>
            <h4 className="font-bold text-black mb-2">Lưu Ý:</h4>
            <p className="text-black opacity-80">
              Mỗi kết quả có thể lại trở thành nguyên nhân cho kết quả khác - tạo ra chuỗi nhân quả liên tục trong tự nhiên và xã hội.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: '3. Tất Nhiên – Ngẫu Nhiên',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-black mb-2">Định Nghĩa:</h4>
            <p className="text-black opacity-80">
              <strong>Tất nhiên:</strong> Những hiện tượng tuân theo quy luật, có tính quy luật, tất yếu xảy ra khi điều kiện đủ.<br/>
              <strong>Ngẫu nhiên:</strong> Những hiện tượng xảy ra không theo quy luật nhất định, không lường trước được.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-black mb-2">Ví Dụ:</h4>
            <p className="text-black opacity-80">
              <strong>Tất nhiên:</strong> Nước sôi ở 100°C (quy luật vật lý)<br/>
              <strong>Ngẫu nhiên:</strong> Bạn gặp một người bạn cũ trên phố<br/>
              Tuy nhiên: Sự gặp gỡ "ngẫu nhiên" này lại có thể là kết quả của nhiều nguyên nhân tất yếu (cùng sống chung thành phố, cùng thời gian rảnh...)
            </p>
          </div>
          <div>
            <h4 className="font-bold text-black mb-2">Mối Liên Hệ:</h4>
            <p className="text-black opacity-80">
              Trong tự nhiên, không có hiện tượng hoàn toàn ngẫu nhiên hay hoàn toàn tất yếu. Chúng luôn coexist - ngẫu nhiên là biểu hiện của sự tất yếu ở cấp độ vi mô.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: '4. Nội Dung – Hình Thức',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-black mb-2">Định Nghĩa:</h4>
            <p className="text-black opacity-80">
              <strong>Nội dung:</strong> Tập hợp tất cả những yếu tố, những bộ phận, những mối quan hệ của một sự vật hay hiện tượng.<br/>
              <strong>Hình thức:</strong> Cách thức mà nội dung được tổ chức, sắp xếp, kết nối lại với nhau.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-black mb-2">Ví Dụ:</h4>
            <p className="text-black opacity-80">
              <strong>Nội dung:</strong> Các chữ cái: A, B, C, D...<br/>
              <strong>Hình thức:</strong> Cách sắp xếp chúng thành những từ khác nhau (ABCD, DCBA, ACBD...)<br/>
              Hay: Nước H₂O - Nội dung: 2 H và 1 O | Hình thức: Cách các nguyên tử kết nối
            </p>
          </div>
          <div>
            <h4 className="font-bold text-black mb-2">Quan Trọng:</h4>
            <p className="text-black opacity-80">
              Hình thức ảnh hưởng đến nội dung và ngược lại. Thay đổi hình thức có thể thay đổi chức năng của nội dung.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: '5. Bản Chất – Hiện Tượng',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-black mb-2">Định Nghĩa:</h4>
            <p className="text-black opacity-80">
              <strong>Bản chất:</strong> Những đặc tính cơ bản, sâu xa, ổn định của sự vật, xác định danh tính của nó.<br/>
              <strong>Hiện tượng:</strong> Những biểu hiện bên ngoài, thay đổi, có thể bị nhận thức trực tiếp qua các giác quan.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-black mb-2">Ví Dụ:</h4>
            <p className="text-black opacity-80">
              <strong>Bản chất:</strong> Cuốn sách có nội dung tri thức<br/>
              <strong>Hiện tượng:</strong> Bìa sách màu xanh, dày 300 trang, có hình vẽ đẹp<br/>
              Bạn có thể nhìn thấy hiện tượng ngay, nhưng phải đọc mới hiểu bản chất.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-black mb-2">Khó Khăn:</h4>
            <p className="text-black opacity-80">
              Bản chất không dễ được nhận thức trực tiếp - cần suy luận, phân tích, nghiên cứu sâu. Nhiều hiện tượng có thể lừa dối chúng ta về bản chất thực sự.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: '6. Khả Năng – Hiện Thực',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-black mb-2">Định Nghĩa:</h4>
            <p className="text-black opacity-80">
              <strong>Khả năng:</strong> Những điều có thể xảy ra trong những điều kiện thích hợp nhưng chưa xảy ra.<br/>
              <strong>Hiện thực:</strong> Những điều đã xảy ra, đã tồn tại, có thể được cảm nhận trực tiếp.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-black mb-2">Ví Dụ:</h4>
            <p className="text-black opacity-80">
              <strong>Khả năng:</strong> Bạn có khả năng trở thành bác sĩ (nếu chăm học)<br/>
              <strong>Hiện thực:</strong> Bạn đã trở thành bác sĩ, đang làm việc tại bệnh viện<br/>
              Hoặc: Hạt giống có khả năng thành cây (khả năng) → Cây lớn lên (hiện thực)
            </p>
          </div>
          <div>
            <h4 className="font-bold text-black mb-2">Quy Luật Phát Triển:</h4>
            <p className="text-black opacity-80">
              Sự phát triển của sự vật là quá trình chuyển hóa từ khả năng thành hiện thực. Không phải tất cả khả năng đều trở thành hiện thực - phụ thuộc vào điều kiện.
            </p>
          </div>
        </div>
      )
    }
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-black mb-2">Các Cặp Phạm Trù</h2>
      <p className="text-black opacity-70 mb-6">Nhấn vào mỗi cặp để xem chi tiết</p>
      <div className="rounded-xl overflow-hidden shadow-lg mb-8">
        <img src={contentImages.pairsBanner} alt="Các cặp phạm trù" className="w-full h-56 object-cover img-warm" />
      </div>

      <div className="space-y-4">
        {pairs.map(pair => (
          <Accordion
            key={pair.id}
            id={pair.id}
            title={pair.title}
            content={pair.content}
            isExpanded={expandedId === pair.id}
            onToggle={() => setExpandedId(expandedId === pair.id ? null : pair.id)}
          />
        ))}
      </div>
    </div>
  )
}
