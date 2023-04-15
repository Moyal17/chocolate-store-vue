export interface User {
    firstName: string;
    LastName?: string;
    email: string;
    address?: string;
    city?: string;
    country?: string;
    zip?: number
    password: string;
}
export interface Product {
    id: number;
    name: string;
    description?: string;
    image: string;
    price: number;
    sale?: number
}
