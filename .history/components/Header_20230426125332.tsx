import Image from "next/image"
import logo from "app/logo.png" ;

function Header() {
  return (
    <header>
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
                
                >
                Check out my portfolio 
                </Link>
            </div>
        </div>
    </header>
  )
}

export default Header