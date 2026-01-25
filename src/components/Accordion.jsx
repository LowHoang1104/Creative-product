export default function Accordion({ id, title, content, isExpanded, onToggle }) {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition flex items-center justify-between"
        style={{ backgroundColor: isExpanded ? '#EEE8AA' : 'white' }}
      >
        <span className="font-bold text-black text-lg">{title}</span>
        <span className={`text-2xl text-black transition transform ${isExpanded ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      
      {isExpanded && (
        <div className="px-6 py-4 bg-gray-50 text-black">
          {content}
        </div>
      )}
    </div>
  )
}
