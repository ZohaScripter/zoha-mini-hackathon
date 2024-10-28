import Link from "next/link"

export default function checkout() {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-4xl font-bold mb-6">Enter Your Details</h1>
      <form className="flex flex-col gap-4 w-80">
        <input
          type="text"
          className="border border-gray-400 py-2 px-3 rounded-md"
          placeholder="Your Name"
        
        />
        <input
          type="email"
          className="border border-gray-400 py-2 px-3 rounded-md"
          placeholder="Your Email"
          
        />
        <input
          type="password"
          className="border border-gray-400 py-2 px-3 rounded-md"
          placeholder="Password"
          
        />
        <input
          type="text"
          className="border border-gray-400 py-2 px-3 rounded-md"
          placeholder="Card Number"
          
        />
        <input
          type="password"
          className="border border-gray-400 py-2 px-3 rounded-md"
          placeholder="PIN"
        
        />
        <button className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
          <Link href="/thank-you">Pay Now</Link>
        </button>
      </form>
    </div>
  );
}
