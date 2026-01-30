import { BookOpen, Zap, Gamepad2, ArrowRight } from 'lucide-react'
import { contentImages } from '../constants/images'

export default function Home({ onNavigate }) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <div className="rounded-2xl overflow-hidden shadow-xl mb-8 max-w-4xl mx-auto ring-2 ring-black/5">
          <img
            src={contentImages.hero}
            alt="Sách triết học"
            className="w-full h-56 md:h-72 object-cover img-warm"
          />
        </div>
        <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
          Khám Phá Cặp Phạm Trù Triết Học
        </h2>
        <p className="text-xl text-black mb-8 opacity-80">
          Nắm vững những khái niệm cơ bản của triết học dianmat qua các cặp phạm trù đối lập
        </p>
      </section>

      {/* Feature Cards */}
      <section className="max-w-6xl mx-auto px-4 py-12 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Giới thiệu */}
          <div 
            className="p-0 rounded-lg shadow-lg cursor-pointer transform transition hover:scale-105 hover:shadow-xl bg-white overflow-hidden"
            onClick={() => onNavigate('about')}
          >
            <img src={contentImages.cardIntro} alt="Giới thiệu" className="w-full h-40 object-cover img-warm" />
            <div className="p-6">
              <BookOpen size={40} className="text-black mb-4" />
              <h3 className="text-2xl font-bold text-black mb-3">Giới Thiệu</h3>
            <p className="text-black opacity-70">
              Tìm hiểu khái niệm cặp phạm trù là gì và vai trò của chúng trong nhận thức.
            </p>
            </div>
          </div>

          {/* Card 2: Các cặp phạm trù */}
          <div 
            className="p-0 rounded-lg shadow-lg cursor-pointer transform transition hover:scale-105 hover:shadow-xl bg-white overflow-hidden"
            onClick={() => onNavigate('pairs')}
          >
            <img src={contentImages.cardPairs} alt="Các cặp phạm trù" className="w-full h-40 object-cover img-warm" />
            <div className="p-6">
              <Zap size={40} className="text-black mb-4" />
              <h3 className="text-2xl font-bold text-black mb-3">Các Cặp Phạm Trù</h3>
            <p className="text-black opacity-70">
              Khám phá 6 cặp phạm trù chính: Cái chung-Cái riêng, Nguyên nhân-Kết quả...
            </p>
            </div>
          </div>

          {/* Card 3: Game */}
          <div 
            className="p-0 rounded-lg shadow-lg cursor-pointer transform transition hover:scale-105 hover:shadow-xl bg-white overflow-hidden"
            onClick={() => onNavigate('game')}
          >
            <img src={contentImages.cardGame} alt="Game tương tác" className="w-full h-40 object-cover img-warm" />
            <div className="p-6">
              <Gamepad2 size={40} className="text-black mb-4" />
              <h3 className="text-2xl font-bold text-black mb-3">Game Tương Tác</h3>
            <p className="text-black opacity-70">
              Chơi game để ghi nhớ và kiểm tra kiến thức về các cặp phạm trù.
            </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-black text-white p-8 rounded-lg text-center">
          <h3 className="text-3xl font-bold mb-4">Sẵn sàng bắt đầu?</h3>
          <p className="text-lg mb-6">Chọn một trong các mục trên để tiếp tục</p>
          <button
            onClick={() => onNavigate('about')}
            className="bg-yellow-100 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-200 transition inline-flex items-center gap-2"
            style={{ backgroundColor: '#C19A6B' }}
          >
            Bắt Đầu Học <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  )
}
