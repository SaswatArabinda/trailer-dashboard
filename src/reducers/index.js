export let reducer = (state, action) => {
    debugger
    switch (action.type) {
        case "DISPLAY_SHOW_CASE":
        case "HIDE_SHOW_CASE":
            let activeIndex = action.payload && action.payload.activeIndex ? action.payload.activeIndex : -1;
            return {
                ...state,
                activeIndex,
            }
        case "FILTER_RESULTS":
            debugger
            let languageFilter = action.payload && action.payload.languageFilter ? action.payload.languageFilter : '';
            let results = action.payload && action.payload.results ? action.payload.results : '';
            return {
                ...state,
                languageFilter,
                results
            }
        default:
            return state
    }
};

