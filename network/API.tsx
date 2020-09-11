
export const baseUrl = "https://moshpitandcode.com/gigs";

export function getHome() {
    return fetch(`${baseUrl}/?json`)
    .then(response => response.json())
    .then(result => result.lastgig)
}