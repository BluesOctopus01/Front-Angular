export interface User {
    id: number;
    username: string;
    first_name: string;
    last_name: string;

    gender: "M" | "F" | "U";

    birthdate: string | null; // ISO string yyyy-mm-dd
    country: string;
    address: string;

    user_bio?: string | null;
    image?: string | null;

    role: string;
    is_active: boolean;

    created_at: string | null;     // ISO datetime
    last_login_at: string | null;  // ISO datetime
}   

export interface SummuryUser{
    id:number;
    username: string;
    first_name: string;
    last_name: string;
    is_active : boolean;
}