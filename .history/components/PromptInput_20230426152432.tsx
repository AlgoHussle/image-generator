'use client'
import { useState } from "react"

function PromptInput() {
    const [input, setInput] = useState("");

    const {data, error, isLoading} = useswr
            
  return (
    <div className="m-10">
        <form className="flex flex-col lg:flex-row shadow-md shadow-slate-400/10 rounded-md lg:divide-x">
            <textarea 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your prompt..."
            className="flex-1 p-4 outline-none rounded-md" />
            <button 
                type="submit"
                disabled={!input}
                className={`p-4 font-bold rounded-lg ${input ? 'bg-orange-500 text-white transition-colors duration-200'
                    : ' text-gray-300 cursor-not-allowed'}'}`}
            >
                Generate
            </button>
            <button 
                type="button"  
                className="p-4 bg-orange-500 text-white transition-colors duration-200 font-bold
                disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400 rounded-lg"
                >
                    Use Suggestion
            </button>
            <button
                type="button"
                className="p-4 bg-white text-orange-500 border-none transition-colors duration-200
                rounded-b-md md:rounded-r-md md:rounded-bl-none font-bold rounded-lg  "
            >
                New Suggestion
            </button>
        </form>
    </div>
  )
}

export default PromptInput