export interface Lastgig {
    id:         number;
    name:       string;
    from_date:  Date;
    end_date:   Date;
    type:       string;
    venue_id:   number;
    created_at: Date;
    updated_at: Date;
    images:     Image[];
    bands:      Band[];
    venue:      Venue;
}

export interface Band {
    id:         number;
    name:       string;
    created_at: Date;
    updated_at: Date;
    pivot:      Pivot;
}

export interface Pivot {
    gig_id:  number;
    band_id: number;
}

export interface Image {
    id:         number;
    title:      string;
    band_id:    null;
    gig_id:     number;
    created_at: Date;
    updated_at: Date;
    path:       string;
}

export interface Venue {
    id:         number;
    name:       string;
    address:    null;
    city:       null;
    country:    null;
    created_at: Date;
    updated_at: Date;
}

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