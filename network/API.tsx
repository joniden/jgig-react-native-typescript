import { convertToDate } from '../functions';
import { Lastgig, Gig } from '../models/GigModels';

export const baseUrl = "https://moshpitandcode.com/gigs";

export function getHome() {
    return fetch(`${baseUrl}/?json`)
    .then(response => response.json())
    .then(result => result.lastgig)
    .then(lastgig => {
        let lg: Lastgig = lastgig
        const updatedImages = lg.images.map(image => ({
            ...image,
            // Convert image
            path: baseUrl + image.path
        }));
        lg.images = updatedImages
        return lg
    })
}

export function getGigs() {
    return fetch(`${baseUrl}/gigs/all?json`)
    .then(response => response.json())
    .then(result => result.gigs)
    .then(gigs => gigs.reverse())
    .then(gigs => {
        let gs: Gig[] = gigs
        let updatedGigs: Gig[] = gs.map(gig => ({
            ...gig,
            // Convert date
            from_date: convertToDate(gig.from_date.toString()),
            end_date: convertToDate(gig.end_date.toString()),
            images: gig.images.map(image => ({
                ...image,
                // Convert image
                path: baseUrl + image.path
            }))
        }))
        return updatedGigs
    })
}