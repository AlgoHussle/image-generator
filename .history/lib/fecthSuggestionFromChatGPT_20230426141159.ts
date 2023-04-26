const fetchSuggestionFromChatGPT = () => {
    fetch("/api/suggestion", {
        cae: "no-store",
    })
}