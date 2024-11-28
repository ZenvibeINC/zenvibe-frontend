import { ActionTypes } from "./ActionTypes";
import axios from "axios";
// Función asíncrona para obtener productos
//** PRODUCTS FUNCTIONS */
export const getAllProducts = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:3001/products');
            dispatch({
                type: ActionTypes.GET_ALL_PRODUCTS,
                payload: response.data,
            });
        }
        catch (error) {
            console.error("Error fetching products:", error);
        }
    };
};
export const searchProduct = (query) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/products?name_like=${query}`);
            dispatch({
                type: ActionTypes.SEARCH_PRODUCT,
                payload: response.data,
            });
        }
        catch (error) {
            console.error("Error fetching products:", error);
        }
    };
};
export const createProduct = (product) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("http://localhost:3001/products", product);
            dispatch({
                type: ActionTypes.CREATE_PRODUCT,
                payload: response.data,
            });
        }
        catch (error) {
            console.error("Error creating product:", error);
        }
    };
};
export const deleteProduct = (id) => {
    return async (dispatch) => {
        try {
            await axios.delete(`http://localhost:3001/products/${id}`);
            dispatch({
                type: ActionTypes.DELETE_PRODUCT,
                payload: id,
            });
        }
        catch (error) {
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
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:3001/users');
            dispatch({
                type: ActionTypes.GET_ALL_USERS,
                payload: response.data,
            });
        }
        catch (error) {
            console.error("Error fetching users:", error);
        }
    };
};
//* USERS FUNCTIONS *//
export const login = (user) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("http://localhost:3001/users/register", user);
            dispatch({
                type: ActionTypes.LOGIN,
                payload: response.data,
            });
        }
        catch (error) {
            console.error("Error logging in:", error);
        }
    };
};
export const logout = () => {
    return async (dispatch) => {
        dispatch({
            type: ActionTypes.LOGOUT,
        });
    };
};
export const register = (user) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("http://localhost:3001/users/register", user);
            dispatch({
                type: ActionTypes.REGISTER,
                payload: response.data,
            });
        }
        catch (error) {
            console.error("Error registering:", error);
        }
    };
};
//   export const register = (user: User) => {
//     return async (dispatch: Dispatch<Action>) => {
//         try {
//             const response = await fetch("http://localhost:3001/users/register", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(user),
//             });
//             const data = await response.json();
//             dispatch({
//                 type: ActionTypes.REGISTER,
//                 payload: data,
//             });
//         } catch (error) {
//             console.error("Error registering:", error);
//         }
//     };
// };
//** CART FUNCTIONS */
export const addCart = (product) => {
    return async (dispatch) => {
        dispatch({
            type: ActionTypes.ADD_TO_CART,
            payload: product,
        });
    };
};
export const removeCart = (product) => {
    return async (dispatch) => {
        dispatch({
            type: ActionTypes.REMOVE_FROM_CART,
            payload: product,
        });
    };
};
//** FAVORITE FUNCTIONS */
export const addFavorite = (product) => {
    return async (dispatch) => {
        dispatch({
            type: ActionTypes.ADD_FAVORITE,
            payload: product,
        });
    };
};
export const removeFavorite = (product) => {
    return async (dispatch) => {
        dispatch({
            type: ActionTypes.REMOVE_FAVORITE,
            payload: product,
        });
    };
};
//# sourceMappingURL=actions.js.map