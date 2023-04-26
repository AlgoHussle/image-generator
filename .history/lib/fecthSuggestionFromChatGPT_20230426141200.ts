const fetchSuggestionFromChatGPT = () => {
    fetch("/api/suggestion", {
        cache: "no-store",
    })
}