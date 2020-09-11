
export const baseUrl = "https://moshpitandcode.com/gigs";

export function getHome() {
    return fetch(`${baseUrl}/?json`)
    .then(response => response.json())
    .then(result => result.lastgig)
}

export function getGigs() {
    return fetch(`${baseUrl}/gigs/all?json`)
    .then(response => response.json())
    .then(result => result.gigs)
    .then(gigs => gigs.reverse())
}