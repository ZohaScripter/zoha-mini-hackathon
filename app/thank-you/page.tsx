import Link from "next/link"


export default function thank_you() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-4xl font-extrabold text-green-600 mb-4">Thank You!</h1>
      <p className="text-lg text-gray-700 mb-8">Your order has been successfully placed and is currently being processed.</p>
      <Link href="/">
        <button className="bg-green-500 text-white font-semibold rounded-lg py-3 px-6 hover:bg-green-600 transition duration-200">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
}
