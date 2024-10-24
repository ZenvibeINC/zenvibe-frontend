"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFavorite = exports.addFavorite = exports.removeCart = exports.addCart = exports.register = exports.logout = exports.login = exports.getAllUsers = exports.deleteProduct = exports.createProduct = exports.searchProduct = exports.getAllProducts = void 0;
const ActionTypes_1 = require("./ActionTypes");
const axios_1 = __importDefault(require("axios"));
// Función asíncrona para obtener productos
//** PRODUCTS FUNCTIONS */
const getAllProducts = () => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get('http://localhost:3001/products');
            dispatch({
                type: ActionTypes_1.ActionTypes.GET_ALL_PRODUCTS,
                payload: response.data,
            });
        }
        catch (error) {
            console.error("Error fetching products:", error);
        }
    });
};
exports.getAllProducts = getAllProducts;
const searchProduct = (query) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`http://localhost:3001/products?name_like=${query}`);
            dispatch({
                type: ActionTypes_1.ActionTypes.SEARCH_PRODUCT,
                payload: response.data,
            });
        }
        catch (error) {
            console.error("Error fetching products:", error);
        }
    });
};
exports.searchProduct = searchProduct;
const createProduct = (product) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.post("http://localhost:3001/products", product);
            dispatch({
                type: ActionTypes_1.ActionTypes.CREATE_PRODUCT,
                payload: response.data,
            });
        }
        catch (error) {
            console.error("Error creating product:", error);
        }
    });
};
exports.createProduct = createProduct;
const deleteProduct = (id) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield axios_1.default.delete(`http://localhost:3001/products/${id}`);
            dispatch({
                type: ActionTypes_1.ActionTypes.DELETE_PRODUCT,
                payload: id,
            });
        }
        catch (error) {
            console.error("Error deleting product:", error);
        }
    });
};
exports.deleteProduct = deleteProduct;
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
const getAllUsers = () => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get('http://localhost:3001/users');
            dispatch({
                type: ActionTypes_1.ActionTypes.GET_ALL_USERS,
                payload: response.data,
            });
        }
        catch (error) {
            console.error("Error fetching users:", error);
        }
    });
};
exports.getAllUsers = getAllUsers;
//* USERS FUNCTIONS *//
const login = (user) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.post("http://localhost:3001/users/register", user);
            dispatch({
                type: ActionTypes_1.ActionTypes.LOGIN,
                payload: response.data,
            });
        }
        catch (error) {
            console.error("Error logging in:", error);
        }
    });
};
exports.login = login;
const logout = () => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        dispatch({
            type: ActionTypes_1.ActionTypes.LOGOUT,
        });
    });
};
exports.logout = logout;
const register = (user) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.post("http://localhost:3001/users/register", user);
            dispatch({
                type: ActionTypes_1.ActionTypes.REGISTER,
                payload: response.data,
            });
        }
        catch (error) {
            console.error("Error registering:", error);
        }
    });
};
exports.register = register;
//** CART FUNCTIONS */
const addCart = (product) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        dispatch({
            type: ActionTypes_1.ActionTypes.ADD_TO_CART,
            payload: product,
        });
    });
};
exports.addCart = addCart;
const removeCart = (product) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        dispatch({
            type: ActionTypes_1.ActionTypes.REMOVE_FROM_CART,
            payload: product,
        });
    });
};
exports.removeCart = removeCart;
//** FAVORITE FUNCTIONS */
const addFavorite = (product) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        dispatch({
            type: ActionTypes_1.ActionTypes.ADD_FAVORITE,
            payload: product,
        });
    });
};
exports.addFavorite = addFavorite;
const removeFavorite = (product) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        dispatch({
            type: ActionTypes_1.ActionTypes.REMOVE_FAVORITE,
            payload: product,
        });
    });
};
exports.removeFavorite = removeFavorite;
