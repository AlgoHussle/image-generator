import Image from "next/image"
import logo from "app/logo.png" ;
import Link from "next/link";

function Header() {
  return (
    <header className="flex p-5">
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
                    ArtiGen <span className="text-violet-500 ">AI</span> Image Generator
                </h1>
                <h2 className="text-xs">
                    Generate images with AI 
                </h2>
            </div>
            {/* Right*/}
            <div>
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