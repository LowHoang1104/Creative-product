import { ArrowLeft, BookOpen, Link2, Star, AlertTriangle, ListChecks, XCircle } from 'lucide-react'

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
          Một trong những cặp phạm trù cơ bản nhất trong triết học duyệt lý
        </p>
      </div>

      {/* Định Nghĩa */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><BookOpen size={32} /> Định Nghĩa</h3>
        
        <div className="space-y-4">
          <div className="border-l-4 border-black pl-6">
            <h4 className="text-xl font-bold text-black mb-2">Cái Chung (General)</h4>
            <p className="text-black opacity-80">
              Những đặc tính, tính chất, thuộc tính chung có ở nhiều sự vật khác nhau. Nó biểu hiện những đặc điểm chung của một lớp sự vật, một loài, một kiểu.
            </p>
            <p className="text-black opacity-70 mt-2 italic">
              Ví dụ: "Động vật" là cái chung cho cá, rắn, chim, người vì chúng đều có đặc điểm là sống động, phản ứng với môi trường.
            </p>
          </div>

          <div className="border-l-4 border-black pl-6">
            <h4 className="text-xl font-bold text-black mb-2">Cái Riêng (Particular)</h4>
            <p className="text-black opacity-80">
              Những đặc tính, tính chất chỉ riêng có ở một sự vật nào đó hoặc một nhóm hẹp những sự vật. Nó phản ánh những điểm khác biệt so với các sự vật khác.
            </p>
            <p className="text-black opacity-70 mt-2 italic">
              Ví dụ: "Người nói được ngôn ngữ" là cái riêng của loài người, phân biệt người với các động vật khác.
            </p>
          </div>

          <div className="border-l-4 border-black pl-6">
            <h4 className="text-xl font-bold text-black mb-2">Cái Đơn Nhất (Individual/Singular)</h4>
            <p className="text-black opacity-80">
              Một cá thể cụ thể, duy nhất, không thể lặp lại. Đó là bản thân sự vật với tất cả những đặc tính cụ thể của nó.
            </p>
            <p className="text-black opacity-70 mt-2 italic">
              Ví dụ: "Tôi" - Nguyễn Văn A, sinh năm 1990, sống ở Hà Nội. Đây là một cá thể không thể lặp lại.
            </p>
          </div>
        </div>
      </section>

      {/* Mối Liên Hệ */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><Link2 size={32} /> Mối Liên Hệ Giữa Ba Khái Niệm</h3>
        
        <div className="space-y-4 text-black opacity-80">
          <p>
            <strong>Cái chung</strong> tồn tại trong <strong>cái riêng</strong>, và <strong>cái riêng</strong> tồn tại trong <strong>cái đơn nhất</strong>. Chúng không đối lập mà bổ sung nhau:
          </p>
          
          <div className="bg-gray-50 p-4 rounded">
            <p className="font-semibold mb-3">Ví dụ về cây cam:</p>
            <ul className="space-y-2 ml-4">
              <li>🌳 <strong>Cái chung:</strong> "Cây ăn quả" - áp dụng cho cam, quýt, vú sữa...</li>
              <li>🍊 <strong>Cái riêng:</strong> "Cây cam" - khác với cây quýt hoặc cây vú sữa</li>
              <li>🌴 <strong>Cái đơn nhất:</strong> "Cây cam thứ 3 trong vườn nhà tôi" - một cây cụ thể</li>
            </ul>
          </div>

          <p className="mt-4">
            Từ <strong>cái đơn nhất</strong> (cây cam cụ thể) → <strong>cái riêng</strong> (loại cây cam) → <strong>cái chung</strong> (cây ăn quả), ta có quá trình <strong>khái quát hóa</strong>.
          </p>
          <p>
            Từ <strong>cái chung</strong> → <strong>cái riêng</strong> → <strong>cái đơn nhất</strong>, ta có quá trình <strong>cụ thể hóa</strong>.
          </p>
        </div>
      </section>

      {/* Ví Dụ Thực Tế */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><Star size={32} /> Ví Dụ Thực Tế</h3>
        
        <div className="space-y-6">
          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="font-bold text-black mb-2">Ví Dụ 1: Phân Loại Động Vật</h4>
            <p className="text-black opacity-80">
              Cái chung: "Động vật" | Cái riêng: "Động vật có vú" | Cái đơn nhất: "Con chó của tôi tên Minu"
            </p>
          </div>

          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="font-bold text-black mb-2">Ví Dụ 2: Trong Xã Hội</h4>
            <p className="text-black opacity-80">
              Cái chung: "Con người" | Cái riêng: "Người Việt Nam" | Cái đơn nhất: "Bạn tôi Hoa, sống ở Sài Gòn"
            </p>
          </div>

          <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: '#C19A6B' }}>
            <h4 className="font-bold text-black mb-2">Ví Dụ 3: Trong Công Nghệ</h4>
            <p className="text-black opacity-80">
              Cái chung: "Máy tính" | Cái riêng: "Máy tính xách tay" | Cái đơn nhất: "Laptop Dell XPS của tôi, số seri 12345"
            </p>
          </div>
        </div>
      </section>

      {/* Ý Nghĩa */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><Star size={32} /> Ý Nghĩa và Ứng Dụng</h3>
        
        <div className="space-y-4 text-black opacity-80">
          <div>
            <h4 className="font-bold text-black mb-2">1. Trong Khoa Học và Phân Loại</h4>
            <p>
              Giúp xây dựng các hệ thống phân loại khoa học: từ chủng tộc → giống → loài → cá thể. Đây là cơ sở của ngành phân loại sinh học (Taxonomy).
            </p>
          </div>

          <div>
            <h4 className="font-bold text-black mb-2">2. Trong Logic và Tư Duy</h4>
            <p>
              Rèn luyện khả năng suy luận logic: khái quát hóa và cụ thể hóa. Từ những ví dụ cụ thể, rút ra quy luật chung; hoặc từ quy luật chung, áp dụng vào trường hợp cụ thể.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-black mb-2">3. Trong Pháp Luật</h4>
            <p>
              Luật pháp đưa ra những quy định chung (cái chung) áp dụng cho tất cả công dân (cái riêng) trong những tình huống cụ thể (cái đơn nhất).
            </p>
          </div>

          <div>
            <h4 className="font-bold text-black mb-2">4. Trong Giáo Dục</h4>
            <p>
              Giáo viên dạy những nguyên lý chung (Cái chung) → Học sinh áp dụng vào các môn học khác nhau (Cái riêng) → Giải quyết những bài toán cụ thể (Cái đơn nhất).
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
              <strong className="text-black">Nhầm lẫn cái chung với cái riêng:</strong> Ví dụ, coi "chim" là cái chung nhưng chỉ nói đến các chim ở Việt Nam (đó là cái riêng).
            </div>
          </div>

          <div className="flex gap-4">
            <XCircle size={24} className="text-red-600 flex-shrink-0 mt-1" />
            <div>
              <strong className="text-black">Quên rằng cái đơn nhất luôn có những đặc tính chung:</strong> Mỗi con người có những đặc tính chung của loài người, không hoàn toàn độc nhất.
            </div>
          </div>

          <div className="flex gap-4">
            <XCircle size={24} className="text-red-600 flex-shrink-0 mt-1" />
            <div>
              <strong className="text-black">Cho rằng cái đơn nhất không quan trọng:</strong> Thực tế, cái đơn nhất là nơi hiện thực hoá của cái chung và cái riêng.
            </div>
          </div>
        </div>
      </section>

      {/* Tóm tắt */}
      <section className="bg-blue-50 p-8 rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-2"><ListChecks size={32} /> Tóm Tắt</h3>
        
        <div className="space-y-3 text-black opacity-80">
          <p>✓ <strong>Cái chung</strong> = Những đặc tính chung của nhiều sự vật</p>
          <p>✓ <strong>Cái riêng</strong> = Những đặc tính khác biệt của một nhóm sự vật</p>
          <p>✓ <strong>Cái đơn nhất</strong> = Một cá thể cụ thể, duy nhất</p>
          <p>✓ Chúng không đối lập mà <strong>bổ sung</strong> nhau trong một thứ tự: Cái chung → Cái riêng → Cái đơn nhất</p>
          <p>✓ Hiểu rõ cặp phạm trù này giúp chúng ta <strong>phân loại tri thức</strong> và <strong>rèn luyện tư duy logic</strong></p>
        </div>
      </section>
    </div>
  )
}
