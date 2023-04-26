import Image from "next/image"
import "app/logo.png" ;

function Header() {
  return (
    <header>
        {/* Left */}
        <div>
            <Image
                src="/logo.png"
                width={30}
                height={0}
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
        </div>
    </header>
  )
}

export default Header