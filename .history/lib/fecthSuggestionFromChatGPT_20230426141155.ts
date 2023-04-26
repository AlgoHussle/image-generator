const fetchSuggestionFromChatGPT = () => {
    fetch("/api/suggestion", {
        cahce: "no-store",
    })
}