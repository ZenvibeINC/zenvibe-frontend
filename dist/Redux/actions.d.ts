import { ActionTypes } from "./ActionTypes";
import { Product, User } from "./types";
import { Dispatch } from "redux";
interface GetAllProductsAction {
    type: ActionTypes.GET_ALL_PRODUCTS;
    payload: Product[];
}
interface CreateProductAction {
    type: ActionTypes.CREATE_PRODUCT;
    payload: Product;
}
interface DeleteProductAction {
    type: ActionTypes.DELETE_PRODUCT;
    payload: string;
}
interface UpdateProductAction {
    type: ActionTypes.UPDATE_PRODUCT;
    payload: Product;
}
interface SearchProductAction {
    type: ActionTypes.SEARCH_PRODUCT;
    payload: Product[];
}
interface GetAllUsersAction {
    type: ActionTypes.GET_ALL_USERS;
    payload: User[];
}
interface LoginAction {
    type: ActionTypes.LOGIN;
    payload: User;
}
interface LogoutAction {
    type: ActionTypes.LOGOUT;
}
interface RegisterAction {
    type: ActionTypes.REGISTER;
    payload: User;
}
interface AddcartAction {
    type: ActionTypes.ADD_TO_CART;
    payload: Product;
}
interface RemovecartAction {
    type: ActionTypes.REMOVE_FROM_CART;
    payload: Product;
}
interface AddfavoriteAction {
    type: ActionTypes.ADD_FAVORITE;
    payload: Product;
}
interface RemovefavoriteAction {
    type: ActionTypes.REMOVE_FAVORITE;
    payload: Product;
}
export type Action = GetAllProductsAction | CreateProductAction | DeleteProductAction | UpdateProductAction | SearchProductAction | GetAllUsersAction | LoginAction | LogoutAction | RegisterAction | AddcartAction | RemovecartAction | AddfavoriteAction | RemovefavoriteAction;
export declare const getAllProducts: () => (dispatch: Dispatch<Action>) => Promise<void>;
export declare const searchProduct: (query: string) => (dispatch: Dispatch<Action>) => Promise<void>;
export declare const createProduct: (product: Product) => (dispatch: Dispatch<Action>) => Promise<void>;
export declare const deleteProduct: (id: string) => (dispatch: Dispatch<Action>) => Promise<void>;
export declare const getAllUsers: () => (dispatch: Dispatch<Action>) => Promise<void>;
export declare const login: (user: User) => (dispatch: Dispatch<Action>) => Promise<void>;
export declare const logout: () => (dispatch: Dispatch<Action>) => Promise<void>;
export declare const register: (user: User) => (dispatch: Dispatch<Action>) => Promise<void>;
export declare const addCart: (product: Product) => (dispatch: Dispatch<Action>) => Promise<void>;
export declare const removeCart: (product: Product) => (dispatch: Dispatch<Action>) => Promise<void>;
export declare const addFavorite: (product: Product) => (dispatch: Dispatch<Action>) => Promise<void>;
export declare const removeFavorite: (product: Product) => (dispatch: Dispatch<Action>) => Promise<void>;
export {};
//# sourceMappingURL=actions.d.ts.map