
function PromptInput() {
  return (
    <div className="m-10">
        <form className="flex flex-col lg:flex-row shadow-md shadow-slate-400/10">
            <textarea />
            <button>Generate</button>
            <button>Use Suggestion</button>
            <button>New Suggestion</button>
        </form>
    </div>
  )
}

export default PromptInput