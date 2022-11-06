import Link from "next/link";
import { SiFacebook, SiInstagram, SiTwitter} from 'react-icons/si'

export default function Footer(){
    return(
        <div className="text-gray-300 mx-auto glassmorph py-10 text-sm font-light font-Koho">
            <div className="bg-gray-500 w-11/12 mx-auto h-[2px] my-3"></div>
            <div className="w-11/12 lg:w-10/12 flex flex-wrap justify-around mx-auto">
                <div className="font-Koho  font-bold">
                    <p className="text-2xl">☕ SpyTea</p>
                    <p className="lg:pt-10">©☕ SpyTea 2022</p>
                    <p>Created by <Link href="https://supriyoghosh.xyz">SpywarePerseus</Link>. All Rights Reserved.</p>
                </div>
                <div>
                    <p className="font-Koho text-2xl font-bold mb-2">Pages</p>
                    <ul>
                        <Link href={{pathname: '/posts'}}><li className="hover:text-gray-100 cursor-pointer">Posts</li></Link>
                        <Link href={{pathname: '/friends'}}><li className="hover:text-gray-100 cursor-pointer">Friends</li></Link>
                        <Link href={{pathname: '/explore'}}><li className="hover:text-gray-100 cursor-pointer">Explore</li></Link>
                        <Link href={{pathname: '/extras'}}><li className="hover:text-gray-100 cursor-pointer">Extras</li></Link>
                        <Link href={{pathname: '/login'}}><li className="hover:text-gray-100 cursor-pointer">Login</li></Link>
                    </ul>
                </div>
                <div>
                <p className="font-Koho text-2xl font-bold mb-2">Socials</p>
                    <ul>
                        <Link href={{pathname: '/'}}><li className="hover:text-gray-100 cursor-pointer flex"><SiFacebook/> <span className="px-5">Facebook</span></li></Link>
                        <Link href={{pathname: '/'}}><li className="hover:text-gray-100 cursor-pointer flex"><SiTwitter /><span className="px-5">Twitter</span></li></Link>
                        <Link href={{pathname: '/'}}><li className="hover:text-gray-100 cursor-pointer flex"><SiInstagram /><span className="px-5">Instagram</span></li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}