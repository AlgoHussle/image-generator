'use client'
import { useState } from "react"

function PromptInput() {
    const [input, setInput] = useState("");
         
  return (
    <div className="m-10">
        <form className="flex flex-col lg:flex-row shadow-md shadow-slate-400/10 rounded-md lg:divide-x">
            <textarea 
            placeholder="Enter your prompt..."
            className="flex-1 p-4 outline-none rounded-md" />
            <button 
                type="submit"
                className=""
            >
                Generate
            </button>
            <button 
                type="button"  
                className="p-4 bg-orange-500 text-white transition-colors duration-200 font-bold
                disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400"
                >
                    Use Suggestion
            </button>
            <button
                type="button"
                className="p-4 bg-white text-orange-500 border-none transition-colors duration-200
                rounded-b-md md:rounded-r-md md:rounded-bl-none font-bold  "
            >
                New Suggestion
            </button>
        </form>
    </div>
  )
}

export default PromptInput