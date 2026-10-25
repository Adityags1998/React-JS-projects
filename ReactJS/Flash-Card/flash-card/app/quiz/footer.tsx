export default function Footer() {
  return (
    <div className="mt-auto flex flex-row justify-center gap-4 p-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Previous Question
      </button>
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Show Answer
      </button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Next Question
      </button>
    </div>
  )
}