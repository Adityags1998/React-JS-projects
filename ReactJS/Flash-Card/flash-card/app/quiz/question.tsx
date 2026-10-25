export default function Question({ question, answer, showanswer }: { question: string; answer: string; showanswer: boolean }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {!showanswer && <h2 className="text-2xl font-semibold">{question}</h2>}
      {showanswer && <p className="text-lg text-gray-600">{answer}</p>}
    </div>
  )
}