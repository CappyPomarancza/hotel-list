export interface Hotel {
    address1: string;
    address2: string;
    checkInHours: string | number;
    checkInMinutes:  | number;
    checkOutHours: string | number;
    checkOutMinutes: string | number;
    country: string;
    countryCode: string;
    description: string;
    email: string;
    facilities: Facility[];
    id: string;
    images: Image[];
    name: string;
    position: Position;
    postcode: string;
    starRating: string | number;
    telephone: string;
    town: string;
}

interface Image {
    url: string;
}

interface Facility {
    code: string;
}

interface Position {
    latitude: string;
    longitude: string;
    timezone: string;
}
