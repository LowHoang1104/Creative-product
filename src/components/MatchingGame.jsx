import { useState, useEffect } from 'react'

export default function MatchingGame() {
  const pairs = [
    { id: 1, left: 'Cái Chung', right: 'Áp dụng cho nhiều sự vật' },
    { id: 2, left: 'Nguyên Nhân', right: 'Gây ra sự thay đổi' },
    { id: 3, left: 'Tất Nhiên', right: 'Tuân theo quy luật' },
  ]

  const [items, setItems] = useState([])
  const [selected, setSelected] = useState([])
  const [matched, setMatched] = useState([])
  const [startTime, setStartTime] = useState(Date.now())
  const [elapsed, setElapsed] = useState(0)
  const [gameWon, setGameWon] = useState(false)

  // Initialize game
  useEffect(() => {
    const shuffled = [...pairs]
      .flatMap((pair, idx) => [
        { id: `${pair.id}-left`, pairId: pair.id, text: pair.left, type: 'left' },
        { id: `${pair.id}-right`, pairId: pair.id, text: pair.right, type: 'right' }
      ])
      .sort(() => Math.random() - 0.5)

    setItems(shuffled)
    setStartTime(Date.now())
  }, [])

  // Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTime) / 1000))
    }, 100)
    return () => clearInterval(interval)
  }, [startTime])

  // Check win
  useEffect(() => {
    if (matched.length === pairs.length && pairs.length > 0) {
      setGameWon(true)
    }
  }, [matched, pairs.length])

  const handleClick = (id) => {
    if (selected.includes(id) || matched.includes(items.find(i => i.id === id)?.pairId)) {
      return
    }

    const newSelected = [...selected, id]
    setSelected(newSelected)

    if (newSelected.length === 2) {
      const item1 = items.find(i => i.id === newSelected[0])
      const item2 = items.find(i => i.id === newSelected[1])

      if (item1.pairId === item2.pairId) {
        // Match found
        setMatched([...matched, item1.pairId])
        setSelected([])
      } else {
        // No match - flip back after delay
        setTimeout(() => {
          setSelected([])
        }, 1000)
      }
    }
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  if (gameWon) {
    return (
      <div className="bg-white p-12 rounded-lg shadow-lg text-center">
        <h3 className="text-4xl font-bold text-black mb-4">🎉 Chúc Mừng!</h3>
        <p className="text-2xl text-black mb-6">Bạn đã hoàn thành trò chơi!</p>
        <p className="text-xl text-black opacity-70 mb-8">
          Thời gian: <span className="font-bold">{formatTime(elapsed)}</span>
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-black text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-800 transition"
        >
          Chơi Lại
        </button>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-8 flex justify-between items-center">
        <div className="text-lg font-bold text-black">
          Tìm được: <span style={{ color: '#EEE8AA' }}>{matched.length}/{pairs.length}</span>
        </div>
        <div className="text-lg font-bold text-black">
          Thời gian: <span style={{ color: '#EEE8AA' }}>{formatTime(elapsed)}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map(item => {
          const isSelected = selected.includes(item.id)
          const isMatched = matched.includes(item.pairId)

          return (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              disabled={isMatched || isSelected}
              className={`p-4 rounded-lg font-bold text-black transition transform cursor-pointer text-center min-h-24 flex items-center justify-center ${
                isMatched
                  ? 'bg-green-100 opacity-50 cursor-not-allowed'
                  : isSelected
                  ? 'bg-blue-300 scale-105'
                  : 'bg-white border-2 border-gray-300 hover:border-black hover:shadow-lg'
              }`}
              style={{
                backgroundColor: isMatched ? '#d4edda' : isSelected ? '#cce5ff' : 'white'
              }}
            >
              {item.text}
            </button>
          )
        })}
      </div>

      <div className="mt-8 p-4 bg-yellow-50 rounded-lg" style={{ backgroundColor: '#f0ebe3' }}>
        <p className="text-sm text-black opacity-70 text-center">
          💡 Gợi ý: Các khái niệm bên trái là từ "Cái Chung", "Nguyên Nhân", "Tất Nhiên". Tìm mô tả tương ứng bên phải!
        </p>
      </div>
    </div>
  )
}
