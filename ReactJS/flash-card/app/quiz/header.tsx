export default function Header( { currentcount, totalcount }: { currentcount: number; totalcount: number } ) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-lg text-gray-600">Test your knowledge with our quiz!</p>
      <p className="text-md text-gray-500">
        Question {currentcount} of {totalcount}
      </p>
    </div>
  )
}   