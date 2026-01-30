import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Game from './pages/Game'
import PairDetail1 from './pages/details/PairDetail1'
import PairDetail2 from './pages/details/PairDetail2'
import PairDetail3 from './pages/details/PairDetail3'
import PairDetail4 from './pages/details/PairDetail4'
import PairDetail5 from './pages/details/PairDetail5'
import PairDetail6 from './pages/details/PairDetail6'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />
      case 'about':
        return <About />
      case 'game':
        return <Game />
      case 'detail-1':
        return <PairDetail1 onNavigate={setCurrentPage} />
      case 'detail-2':
        return <PairDetail2 onNavigate={setCurrentPage} />
      case 'detail-3':
        return <PairDetail3 onNavigate={setCurrentPage} />
      case 'detail-4':
        return <PairDetail4 onNavigate={setCurrentPage} />
      case 'detail-5':
        return <PairDetail5 onNavigate={setCurrentPage} />
      case 'detail-6':
        return <PairDetail6 onNavigate={setCurrentPage} />
      default:
        return <Home onNavigate={setCurrentPage} />
    }
  }

  const baseUrl = import.meta.env.BASE_URL
  const bgImageUrl = `${baseUrl}assets/background.jpg`

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background image - mờ 70% (opacity 30%). Đặt ảnh tại: public/assets/fc81d6467971f7aa63e572fc62eb1eb1.jpg */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat bg-gray-100"
        style={{
          backgroundImage: `url(${bgImageUrl})`,
          opacity: 0.3,
        }}
      />
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1 relative z-0">
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}
