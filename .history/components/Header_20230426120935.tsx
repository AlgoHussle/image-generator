import Image from "next/image"

function Header() {
  return (
    <header>
        {/* Left */}
        <div>
            <Image
                src="https://www.vecteezy.com/vector-art/9880886-outline-colorful-leading-lines-letters-ag-a-g-logo-with-road-concept-design-letters-ab-with-geometric-design"
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