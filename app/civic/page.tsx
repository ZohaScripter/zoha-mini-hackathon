import Link from "next/link"
export default function civic(){
    return(
        <div>
            <div className="text-center">

                <div className="text-black text-5xl font-bold px-10 py-10">Honda Civic</div>
                <div className="flex justify-center items-center py-10 px-10">
                    <img src="/civic.jpg" alt="Honda civic" width="420"  className="border-black " />
                </div>
                <div>

                    <span className="py-5 px-5">The Honda Civic is priced from PKR 2,331,000 for the base VX model, with the fully-equipped VXL AGS variant reaching up to PKR 3,045,000. This range allows buyers to choose a model that best fits their preferences and budget.</span>
                </div>

                <div className=" text-3xl text-green-600 font-semibold py-2 px-2 ">
                    <span>
                        PKR 9,674,000
                    </span>
                </div>

                <button className="bg-yellow-500 text-black rounded-3xl py-2 px-2">
                    <Link href="/">
                        COMPLETE PURCHASE
                    </Link>
                </button>
            </div>
        </div>
    )
}