export interface RegisterForm{
    username: string,
    first_name: string,
    last_name: string,
    password: string,
    email: string,
    gender: string,
    phone_number: string,
    birthdate: Date,
    country: string,
    address: string,
    user_bio?: string,
    image?: string
}