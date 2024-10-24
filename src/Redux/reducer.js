"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ActionTypes_1 = require("./ActionTypes");
const initialState = {
    products: [],
    categories: [],
    users: [],
    cart: [],
    favorites: [],
    search: [],
    user: null,
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes_1.ActionTypes.GET_ALL_PRODUCTS:
            return Object.assign(Object.assign({}, state), { products: action.payload });
        case ActionTypes_1.ActionTypes.CREATE_PRODUCT:
            return Object.assign(Object.assign({}, state), { products: [...state.products, action.payload] });
        // case ActionTypes.DELETE_PRODUCT:
        //   return {
        //     ...state,
        //     products: state.products.filter((product) => product._id !== action.payload),
        //   };
        // case ActionTypes.UPDATE_PRODUCT:
        //   return {
        //     ...state,
        //     products: state.products.map((product) =>
        //       product._id === action.payload._id ? action.payload : product
        //     ),
        //   };
        case ActionTypes_1.ActionTypes.GET_ALL_USERS:
            return Object.assign(Object.assign({}, state), { users: action.payload });
        case ActionTypes_1.ActionTypes.REGISTER:
            return Object.assign(Object.assign({}, state), { user: action.payload });
        case ActionTypes_1.ActionTypes.LOGIN:
            return Object.assign(Object.assign({}, state), { user: action.payload });
        case ActionTypes_1.ActionTypes.LOGOUT:
            return Object.assign(Object.assign({}, state), { user: null });
        case ActionTypes_1.ActionTypes.ADD_TO_CART:
            return Object.assign(Object.assign({}, state), { cart: [...state.cart, action.payload] });
        // case ActionTypes.REMOVE_FROM_CART:
        //     return {
        //       ...state,
        //       cart: state.cart.filter((product) => product._id !== action.payload._id),
        //     }
        case ActionTypes_1.ActionTypes.ADD_FAVORITE:
            return Object.assign(Object.assign({}, state), { favorites: [...state.favorites, action.payload] });
        // case ActionTypes.REMOVE_FAVORITE:
        //   return {
        //     ...state,
        //     favorites: state.favorites.filter((product) => product._id !== action.payload._id),
        //   };
        // Continúa con las demás acciones de la misma forma...
        default:
            return state;
    }
};
exports.default = rootReducer;
