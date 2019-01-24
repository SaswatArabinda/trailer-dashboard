export function displayShowCase(params) {
    return {
        type: "DISPLAY_SHOW_CASE",
        payload: {
            ...params
        }
    }
}

export function hideShowCase(params) {
    return {
        type: "HIDE_SHOW_CASE",
        payload: {
            ...params
        }
    }
}


export function filterResults(params) {
    return {
        type: "FILTER_RESULTS",
        payload: {
            ...params
        }
    }
}

