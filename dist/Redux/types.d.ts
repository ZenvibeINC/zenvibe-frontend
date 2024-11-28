export interface Product {
    name: string;
    description: string;
    price: number;
    inventory: number;
    category_id: number;
}
export interface User {
    name: string;
    email: string;
    password: string;
    phone: number;
    allowExtraEmails?: boolean;
}
export interface AppState {
    products: Product[];
    categories: string[];
    users: User[];
    cart: Product[];
    favorites: Product[];
    search: Product[];
    user?: User | null;
}
//# sourceMappingURL=types.d.ts.map