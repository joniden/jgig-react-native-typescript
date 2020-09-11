import { Band, Venue } from './LastGig';

export interface Gig {
    id:         number;
    name:       string;
    from_date:  Date;
    end_date:   Date;
    type:       string;
    venue_id:   number;
    created_at: Date;
    updated_at: Date;
    bands:      Band[];
    venue:      Venue;
    images:     any[];
}