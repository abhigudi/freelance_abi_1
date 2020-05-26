
export interface UserData {
    department: string;
    role: string;
    designation: string;
    experience: string;
    yearOfJoining: string;
    location: string;
    team: string;
    rating: string;
    phoneNumber: string;
    name: string;
    image: string;
}

export interface SearchFilterFields {
    department: string[];
    role: string[];
    designation: string[];
    experience: string[];
    yearOfJoining: string[];
    location: string[];
    team: string[];
}
