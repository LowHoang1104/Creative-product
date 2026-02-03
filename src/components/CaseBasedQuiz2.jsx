import { useState, useEffect } from 'react'
import { generateScenario } from '../utils/groq'
import { Loader, BookOpen, HelpCircle, CheckCircle, XCircle, ArrowRight } from 'lucide-react'

export default function CaseBasedQuiz() {
  const apiKey = import.meta.env.VITE_GROQ_API_KEY
  const [loading, setLoading] = useState(false)
  const [scenario, setScenario] = useState(null)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [answered, setAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [totalQuestions, setTotalQuestions] = useState(0)
  const [error, setError] = useState(null)

  const loadNewScenario = async () => {
    if (!apiKey) {
      setError('API Key không được cấu hình. Vui lòng liên hệ quản trị viên.')
      return
    }

    setLoading(true)
    setError(null)
    setSelectedAnswer(null)
    setAnswered(false)

    try {
      const newScenario = await generateScenario(apiKey)
      setScenario(newScenario)
      setTotalQuestions(prev => prev + 1)
    } catch (err) {
      setError(`Lỗi: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  // Load tình huống đầu tiên khi component mount
  useEffect(() => {
    loadNewScenario()
  }, [])

  const handleAnswerSelect = (option) => {
    if (answered) return
    setSelectedAnswer(option)
  }

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) {
      setError('Vui lòng chọn một đáp án')
      return
    }

    setAnswered(true)

    // Kiểm tra đáp án đúng
    if (selectedAnswer === scenario.correctAnswer) {
      setScore(prev => prev + 1)
    }
  }

  const handleNextQuestion = () => {
    loadNewScenario()
  }

  if (error && !scenario) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-red-50 p-8 rounded-lg shadow-lg">
          <p className="text-red-700 font-semibold mb-4">{error}</p>
          <button
            onClick={handleNextQuestion}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Thử Lại
          </button>
        </div>
      </div>
    )
  }

  if (loading && !scenario) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center gap-3">
          <Loader size={32} className="text-black animate-spin" />
          <p className="text-black text-lg">Đang sinh tình huống...</p>
        </div>
      </div>
    )
  }

  if (!scenario) {
    return null
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      {/* Thông tin tiến độ */}
      <div className="mb-8 flex justify-between items-center">
        <div className="text-black font-semibold">
          Câu hỏi: <span style={{ color: 'red' }}>{totalQuestions}</span>
        </div>
      </div>

      {/* Cặp phạm trù */}
      <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: '#C19A6B' }}>
        <p className="text-black font-bold text-sm flex items-center gap-2">
          <BookOpen size={18} />
          Cặp phạm trù: <span className="text-lg">{scenario.pair}</span>
        </p>
      </div>

      {/* Tình huống */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2"><BookOpen size={24} /> Tình Huống</h3>
        <p className="text-black opacity-80 text-lg leading-relaxed">
          {scenario.scenario}
        </p>
      </div>

      {/* Câu hỏi */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 className="text-xl font-bold text-black mb-6 flex items-center gap-2"><HelpCircle size={24} /> Câu Hỏi</h3>
        <p className="text-black text-lg mb-6">{scenario.question}</p>

        {/* Các lựa chọn */}
        <div className="space-y-3 mb-6">
          {scenario.options.map((option, index) => {
            const isSelected = selectedAnswer === option
            const isCorrect = option === scenario.correctAnswer

            let bgColor = 'white'
            let borderColor = 'border-gray-300'

            if (answered) {
              if (isCorrect) {
                bgColor = '#d4edda'
                borderColor = 'border-green-500'
              } else if (isSelected && !isCorrect) {
                bgColor = '#f8d7da'
                borderColor = 'border-red-500'
              }
            } else if (isSelected) {
              bgColor = '#cce5ff'
              borderColor = 'border-blue-500'
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                disabled={answered}
                className={`w-full p-4 text-left rounded-lg border-2 transition ${
                  answered ? 'cursor-not-allowed' : 'cursor-pointer hover:shadow-lg'
                }`}
                style={{
                  backgroundColor: bgColor,
                  borderColor: borderColor === 'border-gray-300' ? '#ccc' : borderColor,
                  color: '#000'
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="font-semibold">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  <span>{option}</span>
                  {answered && isCorrect && <CheckCircle size={20} className="ml-auto text-green-600" />}
                  {answered && isSelected && !isCorrect && <XCircle size={20} className="ml-auto text-red-600" />}
                </div>
              </button>
            )
          })}
        </div>

        {/* Nút submit */}
        {!answered && (
          <button
            onClick={handleSubmitAnswer}
            disabled={!selectedAnswer || loading}
            className={`w-full py-3 rounded-lg font-bold text-lg transition ${
              !selectedAnswer || loading
                ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                : 'bg-black text-white hover:bg-gray-800'
            }`}
          >
            Nộp Bài
          </button>
        )}
      </div>

      {/* Giải thích */}
      {answered && (
        <div className={`p-6 rounded-lg shadow-lg mb-8 ${
          selectedAnswer === scenario.correctAnswer ? 'bg-green-50' : 'bg-orange-50'
        }`}>
          <h4 className="font-bold text-black mb-3 flex items-center gap-2">
            {selectedAnswer === scenario.correctAnswer ? (
              <><CheckCircle size={20} className="text-green-600" /> Chính Xác!</>
            ) : (
              <><XCircle size={20} className="text-red-600" /> Chưa Đúng</>
            )}
          </h4>
          <p className="text-black opacity-80 mb-4">
            <strong>Đáp án đúng:</strong> {scenario.correctAnswer}
          </p>
          <p className="text-black opacity-80">
            <strong>Giải thích:</strong> {scenario.explanation}
          </p>
        </div>
      )}

      {/* Nút tiếp theo */}
      {answered && (
        <button
          onClick={handleNextQuestion}
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded-lg font-bold text-lg hover:bg-gray-800 transition disabled:bg-gray-400 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader size={20} className="animate-spin" />
              Đang sinh câu hỏi...
            </>
          ) : (
            <>
              Câu Tiếp Theo <ArrowRight size={20} />
            </>
          )}
        </button>
      )}
    </div>
  )
}
