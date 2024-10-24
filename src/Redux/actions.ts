import { ActionTypes } from "./ActionTypes";
import { Product, User } from "./types";
import axios from "axios";
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

// Repite para todas las demás acciones...

export type Action =
  | GetAllProductsAction
  | CreateProductAction
  | DeleteProductAction
  | UpdateProductAction
  | SearchProductAction
  | GetAllUsersAction
  | LoginAction
  | LogoutAction
  | RegisterAction
  | AddcartAction
  | RemovecartAction
  | AddfavoriteAction
  | RemovefavoriteAction
  

  // Función asíncrona para obtener productos

  //** PRODUCTS FUNCTIONS */
  export const getAllProducts = () => {
    return async (dispatch: Dispatch<Action>) => {
      try {
        const response = await axios.get<Product[]>('http://localhost:3001/products');
        dispatch({
          type: ActionTypes.GET_ALL_PRODUCTS,
          payload: response.data,
        });
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  };

  export const searchProduct = (query: string) => {
    return async (dispatch: Dispatch<Action>) => {
      try {
        const response = await axios.get<Product[]>(
          `http://localhost:3001/products?name_like=${query}`
        );
        dispatch({
          type: ActionTypes.SEARCH_PRODUCT,
          payload: response.data,
        });
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  };

  export const createProduct = (product: Product) => {
    return async (dispatch: Dispatch<Action>) => {
      try {
        const response = await axios.post<Product>(
          "http://localhost:3001/products",
          product
        );
        dispatch({
          type: ActionTypes.CREATE_PRODUCT,
          payload: response.data,
        });
      } catch (error) {
        console.error("Error creating product:", error);
      }
    };
  };

  export const deleteProduct = (id: string) => {
    return async (dispatch: Dispatch<Action>) => {
      try {
        await axios.delete(`http://localhost:3001/products/${id}`);
        dispatch({
          type: ActionTypes.DELETE_PRODUCT,
          payload: id,
        });
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    };
  };

  // export const updateProduct = (product: Product) => {
  //   return async (dispatch: Dispatch<Action>) => {
  //     try {
  //       const response = await axios.put<Product>(
  //         `http://localhost:3001/products/${product._id}`,
  //         product
  //       );
  //       dispatch({
  //         type: ActionTypes.UPDATE_PRODUCT,
  //         payload: response.data,
  //       });
  //     } catch (error) {
  //       console.error("Error updating product:", error);
  //     }
  //   };
  // };
  
  export const getAllUsers = () => {
    return async (dispatch: Dispatch<Action>) => {
      try {
        const response = await axios.get<User[]>('http://localhost:3001/users');
        dispatch({
          type: ActionTypes.GET_ALL_USERS,
          payload: response.data,
        });
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
  };
//* USERS FUNCTIONS *//
  export const login = (user: User) => {
    return async (dispatch: Dispatch<Action>) => {
      try {
        const response = await axios.post<User>(
          "http://localhost:3001/users/register",
          user
        );
        dispatch({
          type: ActionTypes.LOGIN,
          payload: response.data,
        });
      } catch (error) {
        console.error("Error logging in:", error);
      }
    };
  };

  export const logout = () => {
    return async (dispatch: Dispatch<Action>) => {
      dispatch({
        type: ActionTypes.LOGOUT,
      });
    };
  };

  export const register = (user: User) => {
    return async (dispatch: Dispatch<Action>) => {
      try {
        const response = await axios.post<User>(
          "http://localhost:3001/users/register",
          user
        );
        dispatch({
          type: ActionTypes.REGISTER,
          payload: response.data,
        });
      } catch (error) {
        console.error("Error registering:", error);
      }
    };  
  };

  //** CART FUNCTIONS */

  export const addCart = (product: Product) => {
    return async (dispatch: Dispatch<Action>) => {
      dispatch({
        type: ActionTypes.ADD_TO_CART,
        payload: product,
      });
    };
  };

  export const removeCart = (product: Product) => {
    return async (dispatch: Dispatch<Action>) => {
      dispatch({
        type: ActionTypes.REMOVE_FROM_CART,
        payload: product,
      });
    };
  };

  //** FAVORITE FUNCTIONS */


  export const addFavorite = (product: Product) => {
    return async (dispatch: Dispatch<Action>) => {
      dispatch({
        type: ActionTypes.ADD_FAVORITE,
        payload: product,
      });
    };
  };

  export const removeFavorite = (product: Product) => {
    return async (dispatch: Dispatch<Action>) => {
      dispatch({
        type: ActionTypes.REMOVE_FAVORITE,
        payload: product,
      });
    };
  };