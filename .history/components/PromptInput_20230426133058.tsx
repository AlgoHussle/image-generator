
function PromptInput() {
  return (
    <div className="m-10">
        <form className="flex flex-col lg:flex-row shadow-md shadow-slate-400/10 rounded-md lg:divide-x">
            <textarea className="flex-1 p-4 outline-none rounded-md" />
            <button className="bg-orange-500 text-white transition-colors
            duration-200 font-bold disabled:text-gray-300 disabled:
            "
            >
                Generate
            </button>
            <button className="">Use Suggestion</button>
            <button>New Suggestion</button>
        </form>
    </div>
  )
}

export default PromptInput