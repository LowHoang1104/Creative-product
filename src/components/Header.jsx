import { useState } from 'react'
import { Menu, Home, BookOpen, Gamepad2, Zap } from 'lucide-react'

const pairCategories = [
  { id: 'detail-1', label: 'Cái Chung – Cái Riêng' },
  { id: 'detail-2', label: 'Nguyên Nhân – Kết Quả' },
  { id: 'detail-3', label: 'Tất Nhiên – Ngẫu Nhiên' },
  { id: 'detail-4', label: 'Nội Dung – Hình Thức' },
  { id: 'detail-5', label: 'Bản Chất – Hiện Tượng' },
  { id: 'detail-6', label: 'Khả Năng – Hiện Thực' }
]

export default function Header({ currentPage, onNavigate }) {
  const [showDropdown, setShowDropdown] = useState(false)

  const navItems = [
    { id: 'home', label: 'Trang chủ', Icon: Home, hasDropdown: false },
    { id: 'about', label: 'Giới thiệu', Icon: BookOpen, hasDropdown: false },
    { id: 'pairs', label: 'Các cặp phạm trù', Icon: Zap, hasDropdown: true },
    { id: 'game', label: 'Game tương tác', Icon: Gamepad2, hasDropdown: false }
  ]

  const handlePairClick = (pairId) => {
    setShowDropdown(false)
    onNavigate(pairId)
  }

  return (
    <header className="bg-yellow-100 shadow-md sticky top-0 z-50" style={{ backgroundColor: '#EEE8AA' }}>
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 
            className="text-2xl font-bold text-black cursor-pointer"
            onClick={() => {
              onNavigate('home')
              setShowDropdown(false)
            }}
          >
            Cặp Phạm Trù Triết Học
          </h1>
          
          <ul className="flex flex-wrap gap-2 md:gap-6 items-center">
            {navItems.map(item => (
              <li key={item.id} className={item.hasDropdown ? 'relative group' : ''}>
                <button
                  onClick={() => {
                    if (item.hasDropdown) {
                      setShowDropdown(!showDropdown)
                    } else {
                      onNavigate(item.id)
                      setShowDropdown(false)
                    }
                  }}
                  onMouseEnter={() => item.hasDropdown && setShowDropdown(true)}
                  className={`px-3 py-2 rounded transition flex items-center gap-2 ${
                    currentPage === item.id && !item.hasDropdown
                      ? 'bg-black text-white font-semibold'
                      : 'text-black hover:bg-yellow-200'
                  }`}
                >
                  <item.Icon size={18} />
                  <span>{item.label}</span>
                  {item.hasDropdown && <Menu size={16} />}
                </button>

                {/* Dropdown menu */}
                {item.hasDropdown && (
                  <div 
                    className={`absolute left-0 mt-0 bg-white border border-gray-300 rounded-md shadow-lg z-10 min-w-max transition-opacity duration-200 ${
                      showDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                    onMouseLeave={() => setShowDropdown(false)}
                  >
                    {pairCategories.map(pair => (
                      <button
                        key={pair.id}
                        onClick={() => handlePairClick(pair.id)}
                        className="block w-full text-left px-4 py-2 text-black hover:bg-yellow-100 transition first:rounded-t-md last:rounded-b-md"
                        style={{ 
                          backgroundColor: currentPage === pair.id ? '#EEE8AA' : 'white',
                          fontWeight: currentPage === pair.id ? 'bold' : 'normal'
                        }}
                      >
                        {pair.label}
                      </button>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
