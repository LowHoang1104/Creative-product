import { ArrowLeft, BookOpen, Link2, Star, AlertTriangle, ListChecks, XCircle } from 'lucide-react';

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
      
      <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#EEE8AA' }}>
        <p className="text-black font-semibold">
          Hai yếu tố cấu thành mọi sự vật - cái gì (nội dung) và cách thức (hình thức)
        </p>
      </div>

      {/* Định Nghĩa */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><BookOpen size={32} /> Định Nghĩa</h3>
        
        <div className="space-y-4">
          <div className="border-l-4 border-black pl-6">
            <h4 className="text-xl font-bold text-black mb-2">Nội Dung (Content)</h4>
            <p className="text-black opacity-80">
              Tập hợp tất cả những yếu tố, những bộ phận, những mối quan hệ cấu thành sự vật. Nó trả lời câu hỏi "cái gì" - những thành phần cơ bản của sự vật.
            </p>
            <p className="text-black opacity-70 mt-2 italic">
              Ví dụ: Nội dung của cuốn sách là những chương, những trang, những chữ | Nội dung của chiếc áo là những sợi vải
            </p>
          </div>

          <div className="border-l-4 border-black pl-6">
            <h4 className="text-xl font-bold text-black mb-2">Hình Thức (Form)</h4>
            <p className="text-black opacity-80">
              Cách thức mà nội dung được tổ chức, sắp xếp, kết nối lại với nhau. Nó trả lời câu hỏi "như thế nào" - cấu trúc, trật tự của sự vật.
            </p>
            <p className="text-black opacity-70 mt-2 italic">
              Ví dụ: Hình thức của cuốn sách là cách những trang được sắp xếp, những chương được bố cục | Hình thức của chiếc áo là cách những sợi vải được dệt lại
            </p>
          </div>
        </div>
      </section>

      {/* Mối Liên Hệ */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><Link2 size={32} /> Mối Liên Hệ Giữa Nội Dung và Hình Thức</h3>
        
        <div className="space-y-4 text-black opacity-80">
          <div className="bg-yellow-50 p-4 rounded" style={{ backgroundColor: '#f0ebe3' }}>
            <p className="font-semibold text-black mb-2">💡 Quy Luật Cơ Bản:</p>
            <p>
              <strong>Nội dung quyết định hình thức.</strong> Những thành phần khác nhau sẽ có hình thức khác nhau. Nhưng <strong>hình thức cũng ảnh hưởng lại nội dung</strong> - thay đổi cách sắp xếp có thể thay đổi chức năng.
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-bold text-black mb-2">Sự tương thích:</h4>
            <p>
              Hình thức phải phù hợp với nội dung. Khi nội dung thay đổi, hình thức sẽ thích ứng theo (hoặc bị loại bỏ). Khi hình thức không còn phù hợp, nó sẽ bị thay thế bằng hình thức mới.
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-bold text-black mb-2">Sự tác động hai chiều:</h4>
            <p>
              Nội dung ảnh hưởng đến hình thức, nhưng hình thức cũng ảnh hưởng đến nội dung. Ví dụ: Các chữ cái giống nhau (nội dung) nhưng sắp xếp khác (hình thức) tạo ra ý nghĩa khác nhau.
            </p>
          </div>
        </div>
      </section>

      {/* Ví Dụ Thực Tế */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><Star size={32} /> Ví Dụ Thực Tế</h3>
        
        <div className="space-y-6">
          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#EEE8AA' }}>
            <h4 className="font-bold text-black mb-2">Ví Dụ 1: Những Chữ Cái</h4>
            <div className="text-black opacity-80">
              <p><strong>Nội dung:</strong> Những chữ cái: H, O, T</p>
              <p className="mt-2">→ <strong>Hình thức 1:</strong> HOT → Có nghĩa "nóng"</p>
              <p className="mt-2">→ <strong>Hình thức 2:</strong> THO → Không có nghĩa hoặc có nghĩa khác</p>
              <p className="mt-2">→ <strong>Hình thức 3:</strong> OTH → Không có nghĩa</p>
              <p className="mt-2 italic text-sm">Cùng một nội dung (3 chữ) nhưng hình thức khác → ý nghĩa hoàn toàn khác</p>
            </div>
          </div>

          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#EEE8AA' }}>
            <h4 className="font-bold text-black mb-2">Ví Dụ 2: Nguyên Tử Nước (H₂O)</h4>
            <div className="text-black opacity-80">
              <p><strong>Nội dung:</strong> 2 nguyên tử H + 1 nguyên tử O</p>
              <p className="mt-2">→ <strong>Hình thức:</strong> Các nguyên tử kết hợp thành phân tử nước → Có tính chất lỏng, trong suốt, mặn nước</p>
              <p className="mt-2">→ Nếu thay đổi "hình thức" cầu nối, ta có H₂O₂ (nước oxy già) → Tính chất hoàn toàn khác</p>
            </div>
          </div>

          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#EEE8AA' }}>
            <h4 className="font-bold text-black mb-2">Ví Dụ 3: Một Bức Ảnh</h4>
            <div className="text-black opacity-80">
              <p><strong>Nội dung:</strong> Những điểm ảnh (pixels) màu đỏ, xanh, vàng</p>
              <p className="mt-2">→ <strong>Hình thức:</strong> Cách sắp xếp những pixels → Tạo thành một hình ảnh của bông hoa, người, v.v.</p>
              <p className="mt-2">→ Nếu thay đổi hình thức, cùng một pixels có thể tạo thành hình ảnh hoàn toàn khác</p>
            </div>
          </div>

          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#EEE8AA' }}>
            <h4 className="font-bold text-black mb-2">Ví Dụ 4: Một Cuốn Sách</h4>
            <div className="text-black opacity-80">
              <p><strong>Nội dung:</strong> Tri thức, kiến thức, những ý tưởng</p>
              <p className="mt-2">→ <strong>Hình thức:</strong> Những chương, những mục, những đoạn văn được sắp xếp có trật tự</p>
              <p className="mt-2">→ Sách bìa cứng hay bìa mềm, sách in hay e-book là hình thức khác nhau, nhưng nội dung vẫn như nhau</p>
            </div>
          </div>

          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#EEE8AA' }}>
            <h4 className="font-bold text-black mb-2">Ví Dụ 5: Một Cơn Bão</h4>
            <div className="text-black opacity-80">
              <p><strong>Nội dung:</strong> Khí áp thấp, gió mạnh, độ ẩm cao</p>
              <p className="mt-2">→ <strong>Hình thức:</strong> Cách chuyển động, hình dạng của cơn bão (vòng xoáy tròn)</p>
              <p className="mt-2">→ Hình thức xoáy này tạo ra sức mạnh kinh hoàng</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ứng Dụng */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><Star size={32} /> Ứng Dụng Thực Tế</h3>
        
        <div className="space-y-4 text-black opacity-80">
          <div>
            <h4 className="font-bold text-black mb-2">1. Trong Thiết Kế và Nghệ Thuật</h4>
            <p>
              Nhà thiết kế chọn hình thức (màu sắc, hình dáng, bố cục) để biểu hiện nội dung (ý tưởng, cảm xúc). Hình thức đẹp có thể làm nội dung trở nên sinh động hơn.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-black mb-2">2. Trong Viết Lách</h4>
            <p>
              Nội dung là ý tưởng của tác giả, nhưng hình thức là cách viết (câu từ, cấu trúc, phong cách). Cùng một ý tưởng nhưng viết khác nhau sẽ ảnh hưởng khác nhau đến độc giả.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-black mb-2">3. Trong Quản Lý Tổ Chức</h4>
            <p>
              Nội dung là tài nguyên (con người, tiền, máy móc), hình thức là cấu trúc tổ chức (phòng ban, quy trình, hệ thống). Cấu trúc tốt sẽ giúp tài nguyên hoạt động hiệu quả hơn.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-black mb-2">4. Trong Giáo Dục</h4>
            <p>
              Nội dung là kiến thức cần truyền, hình thức là cách dạy (bài thuyết trình, bài tập, game). Hình thức tốt sẽ giúp học sinh tiếp thu kiến thức tốt hơn.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-black mb-2">5. Trong Kinh Doanh</h4>
            <p>
              Nội dung là tính năng sản phẩm, hình thức là gói bao bì, quảng cáo, giá cả. Hình thức tốt có thể tăng giá trị sản phẩm mặc dù nội dung vẫn như nhau.
            </p>
          </div>
        </div>
      </section>

      {/* Sự Phát Triển */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><Star size={32} /> Sự Phát Triển Của Nội Dung và Hình Thức</h3>
        
        <div className="space-y-4 text-black opacity-80">
          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-bold text-black mb-2">Quy Luật 1: Nội dung Phát Triển Trước</h4>
            <p>
              Khi nội dung thay đổi, hình thức cũ không còn phù hợp, nên phải tìm hình thức mới. Ví dụ: Dân số tăng (nội dung) → Cần xây dựng nhà cửa mới (hình thức).
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-bold text-black mb-2">Quy Luật 2: Hình Thức Cản Trở Hoặc Hỗ Trợ Nội Dung</h4>
            <p>
              Hình thức cũ có thể cản trở sự phát triển của nội dung. Khi đó, phải thay đổi hình thức. Ví dụ: Chế độ độc tài (hình thức) cản trở sự phát triển kinh tế (nội dung) → Cần thay đổi chế độ.
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-bold text-black mb-2">Quy Luật 3: Nội Dung Quyết Định Hình Thức Cuối Cùng</h4>
            <p>
              Hình thức có thể đa dạng, nhưng nó phải phù hợp với nội dung. Cùng một nội dung sẽ tìm được hình thức phù hợp nhất cho nó.
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
              <strong className="text-black">Chỉ chú trọng hình thức, bỏ qua nội dung:</strong> "Cách bao bì đẹp là đủ" → Nhưng sản phẩm kém chất lượng sẽ bị người dùng bỏ rơi.
            </div>
          </div>

          <div className="flex gap-4">
            <XCircle size={24} className="text-red-600 flex-shrink-0 mt-1" />
            <div>
              <strong className="text-black">Bỏ qua vai trò của hình thức:</strong> "Nội dung tốt là đủ" → Nhưng nếu cách trình bày tồi, ít người sẽ quan tâm.
            </div>
          </div>

          <div className="flex gap-4">
            <XCircle size={24} className="text-red-600 flex-shrink-0 mt-1" />
            <div>
              <strong className="text-black">Cho rằng hình thức không thể thay đổi:</strong> "Chúng ta đã luôn làm như thế" → Nhưng khi nội dung thay đổi, hình thức cũ sẽ trở nên lạc hậu.
            </div>
          </div>

          <div className="flex gap-4">
            <XCircle size={24} className="text-red-600 flex-shrink-0 mt-1" />
            <div>
              <strong className="text-black">Nhầm lẫn hình thức với nội dung:</strong> "Bìa sách đẹp = sách hay" → Không đúng, bìa chỉ là hình thức.
            </div>
          </div>
        </div>
      </section>

      {/* Tóm tắt */}
      <section className="bg-blue-50 p-8 rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><ListChecks size={32} /> Tóm Tắt</h3>
        
        <div className="space-y-3 text-black opacity-80">
          <p>✓ <strong>Nội dung</strong> = Những thành phần cơ bản của sự vật</p>
          <p>✓ <strong>Hình thức</strong> = Cách sắp xếp, tổ chức những thành phần đó</p>
          <p>✓ Nội dung quyết định hình thức, nhưng hình thức cũng ảnh hưởng đến nội dung</p>
          <p>✓ Cùng nội dung có thể có hình thức khác nhau; cùng hình thức có thể có nội dung khác nhau</p>
          <p>✓ Trong sự phát triển, <strong>nội dung thay đổi trước, hình thức thích ứng theo</strong></p>
          <p>✓ Hiểu rõ cặp phạm trù này giúp chúng ta <strong>cân bằng giữa cái gì (nội dung) và cách thức (hình thức)</strong></p>
        </div>
      </section>
    </div>
  )
}
