import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="flex bg-blue-900 w-full h-28 py-5 px-24">
            <img src="/logo.jpg" height={35} width={250} />
            <div className="flex justify-end items-center w-full">
                <ul className="flex justify-center items-center w-full text-white gap-10">
                    <li>
                        <Link href="/new-cars" className="text-grey-300 hover:text-white">New Cars
                        </Link>
                    </li>
                    <li>
                        <Link href="/old-cars" className="text-grey-300 hover:text-white">Old Cars
                        </Link>
                    </li>
                    <li>
                        <Link href="/bikes" className="text-grey-300 hover:text-white">Bikes
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog" className="text-grey-300 hover:text-white">Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="/career" className="text-grey-300 hover:text-white">Career
                        </Link>
                    </li>
                    <li>
                        <Link href="/news&reviews" className="text-grey-300 hover:text-white">News & Reviews
                        </Link>
                    </li>
                </ul>
                <div className=" py-5 ">
                <button className="text-nowrap text-white bg-red-600 px-6 py-2">Post an Ad</button>
                </div>
            </div>
        </nav>
    )
}