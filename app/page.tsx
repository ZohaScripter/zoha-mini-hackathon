import Link from "next/link"
export default function Home(){
  return(
    <main>
      <div>
        <h1 className="text-5xl text-center font-bold py-16 px-16">
          Sell your car & get the best price!
        </h1>
        <div className="flex justify-center items-center">
          <div className="py-10 px-10">
            <h1 className="text-3xl text-blue-500">
              Post your Ad
            </h1>
            <p>- Post your Ad for free in 3 easy steps</p>
            <p>- Get offers from verified buyers</p>
            <p>- Sell your car fat at the best price</p>
            <button className="bg-red-600 rounded-xl py-2 px-2">POST YOUR AD</button>
          </div>
          <div className="font-semibold text-3xl text-gray-500">
            <h1>OR</h1>
          </div>
          <div className="py-10 px-10">
            <h1 className="text-3xl text-blue-500">Try to sell it</h1>
            <p>- Dedicated sales expert to sell your car</p>
            <p>- We bargain for you and share the best offer</p>
            <p>- We ensure safe and secure transaction </p>
            <button className="bg-blue-600 rounded-xl py-2 px-2">REGISTER YOUR CAR</button>
          </div>
        </div>
      </div>
      <div>
        <nav>
          <div>
            <br />
            <div className="text-xl font-bold px-4">FEATURED NEW CARS</div>
            <br />
            <div className="flex justify-start items-start bg-slate-100 border-black">
              <div className="py-2 px-2">Popular</div>
              <div className="py-2 px-2">Upcoming</div>
              <div className="py-2 px-2">Newly launched</div>
            </div>
          </div>
        </nav>
      </div>

      <div>
                
                <div className="bg-white py-4 px-4 h-96 flex justify-between  ">
                    <div className="border-black bg-slate-50 w-30 h-50 py-2 px-2 rounded-xl ">
                        <Link href="/alto">
                            <img src="/altoo.jpg" width="220" />
                            <div className="text-semibold text-pink-600 text-xl">
                                SUZUKI ALTO
                            </div>
                            <div className="text-gray-500 text-sm">
                                PKR 5,350,000
                            </div>
                        
                        </Link>
                    </div>
                    <div className="border-black bg-slate-30 w-50 h-64 py-2 px-2 rounded-xl">
                        <Link href="/corolla">
                            <img src="/corolla.jpg" width="220" />
                            <div className="text-semibold text-pink-600 text-xl">
                                TOYOTA COROLLA 
                            </div>
                            <div className="text-gray-500 text-sm">
                                PKR 8,889,000
                            </div>
                        
                        </Link>

                    </div>
                    <div className="border-black bg-slate-30 w-50 h-64 py-2 px-2 rounded-xl">
                        <Link href="/civic">
                            <img src="/civic.jpg" width="220" />
                            <div className="text-semibold text-pink-600 text-xl">
                                HONDA CIVIC
                            </div>
                            <div className="text-gray-500 text-sm">
                                PKR 9,674,000
                            </div>
                        
                        </Link>
                    </div>
                    <div className="border-black bg-slate-30 w-50 h-64 py-2 px-2 rounded-xl">
                    <Link href="/city">
                            <img src="/city.jpg" width="220" />
                            <div className="text-semibold text-pink-600 text-xl">
                                HONDA CITY
                            </div>
                            <div className="text-gray-500 text-sm">
                                PKR 6,964,000
                            </div>
                        
                        </Link>
                   
                    </div>
                    
                </div>
            </div> 

    </main>
  )
}