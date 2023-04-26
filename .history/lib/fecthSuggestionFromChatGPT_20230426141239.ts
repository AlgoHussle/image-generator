const fetchSuggestionFromChatGPT = () => {
    fetch("/api/suggestion", {
        cache: "no-store",
    }).then((res) => res.json());
}







const d