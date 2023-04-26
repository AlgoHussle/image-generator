import Image from "next/image"
import logo from "app/logo.png" ;
import Link from "next/link";

function Header() {
  return (
    <header className="flex p-5 justify-between sticky top-0 bg-white z-50 shadow-md">
        {/* Left */}
        <div className="flex space-x-2 items-center">
            <Image
                src="https://links.papareact.com/4t3"
                width={30}
                height={30}
                alt="logo"
            
            />

            <div>
                <h1 className="font-bold">
                    ArtiGen <span className="text-4xl text-gradient-to-r from-green-300 via-blue-500 to-purple-600">AI</span> Image Generator
                </h1>
                <h2 className="text-xs">
                    Generate images with AI 
                </h2>
            </div>
            {/* Right*/}
            <div className="flex text-sm md:text-base divide-x items-center text-gray-500">
                <Link
                href="https://mikepage.vercel.app/"
                className="px-2 font-light text-right"
                >
                Check out my portfolio 
                </Link>
                <Link
                href="https://github.com/AlgoHussle/image-generator"
                className="px-2 font-light text-right"
                >
                Github Repo 
                </Link>
            </div>
        </div>
    </header>
  )
}

export default Header