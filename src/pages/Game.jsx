import { Gamepad2, Brain, BookOpen, AlertCircle } from 'lucide-react'
import CaseBasedQuiz from '../components/CaseBasedQuiz2'
import { contentImages } from '../constants/images'

export default function Game() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-black mb-6 flex items-center gap-3"><Gamepad2 size={36} /> Game Tương Tác</h2>
      <div className="rounded-xl overflow-hidden shadow-lg mb-8">
        <img src={contentImages.gameHeader} alt="Học và quiz" className="w-full h-52 object-cover img-warm" />
      </div>
      
      <div className="mb-8 bg-blue-50 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-black mb-4">Trắc Nghiệm Tình Huống (Case-Based Quiz)</h3>
        
        <div className="space-y-3 text-black opacity-80 mb-6">
          <p className="flex gap-3 items-start">
            <Brain size={20} className="flex-shrink-0 mt-1" />
            <span><strong>Ý tưởng:</strong> AI sẽ sinh ra những tình huống thực tế mỗi lần. Bạn phải xác định tình huống đó liên quan đến cặp phạm trù nào.</span>
          </p>
          <p className="flex gap-3 items-start">
            <BookOpen size={20} className="flex-shrink-0 mt-1" />
            <span><strong>Ví dụ:</strong> "Trời mưa làm đường ngập, gây kẹt xe" → Đây là cấu phạm trù nào?</span>
          </p>
          <p className="flex gap-3 items-start">
            <Gamepad2 size={20} className="flex-shrink-0 mt-1" />
            <span><strong>Công nghệ:</strong> Sử dụng Groq API để sinh dữ liệu mới mỗi lần, tránh lặp lại và giải thích chi tiết.</span>
          </p>
        </div>

        <div className="bg-yellow-50 p-4 rounded flex gap-3 items-start" style={{ backgroundColor: '#C19A6B' }}>
          <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
          <p className="text-black text-sm">
            Lưu ý: Bạn cần Groq API Key (miễn phí) để chơi game này. Sẽ được nhắc nhập khi bạn bắt đầu.
          </p>
        </div>
      </div>

      <CaseBasedQuiz />
    </div>
  )
}
