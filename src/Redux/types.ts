export interface Product {
  name: string;
  description: string;
  price: number;
  inventory: number;
  category_id: number;
    // otros campos que tiene el producto
  }
  
  export interface User {
    name: string;
    email: string;
    phone: number;
    password: string;
    // otros campos del usuario
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