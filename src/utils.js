export const LOCAL_KEY = "markdown_preview_content";

export function saveToLocal(content) {
    try {
        localStorage.setItem(LOCAL_KEY, content);
    } catch (e) {
        console.warn("Could not save to localStorage", e);
    }
}

export function loadFromLocal() {
    try {
        return localStorage.getItem(LOCAL_KEY) || "";
    } catch (e) {
        console.warn("Could not read localStorage", e);
        return "";
    }
}