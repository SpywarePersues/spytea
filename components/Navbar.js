import Link from "next/link"

export default function Navbar(){
    return(
        <div className="py-5">
            <div className="lg:flex justify-between w-11/12 text-center font-Koho cursor-pointer lg:w-9/12 mx-auto py-5 text-gray-200 rounded-md lg:px-36">
                <ul>
                    <Link href={{pathname: '/'}}><li className="hover:text-gray-100 font-Koho text-3xl">☕ SpyTea</li></Link>
                </ul>
                <ul className="lg:flex justify-between w-7/12 mx-auto mt-2">
                    <Link href={{pathname: '/products'}}><li className="hover:text-gray-400 transition-all duration-300">Posts</li></Link>
                    <Link href={{pathname: '/new'}}><li className="hover:text-gray-400 transition-all duration-300">Friends</li></Link>
                    <Link href={{pathname: '/men'}}><li className="hover:text-gray-400 transition-all duration-300">Explore</li></Link>
                    <Link href={{pathname: '/women'}}><li className="hover:text-gray-400 transition-all duration-300">Extras</li></Link>
                    <Link href={{pathname: '/unisex'}}><li className="hover:text-gray-400 transition-all duration-300">Login</li></Link>
                </ul>
                <ul className="mt-2">
                    <Link href={{pathname: '/contact'}}><li className="hover:text-gray-400 transition-all duration-300">Contact Us</li></Link>
                </ul>
            </div>
        </div>
    )
}