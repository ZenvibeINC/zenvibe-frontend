import { AppState} from "./types";
import { Action } from "./actions";
import { ActionTypes } from "./ActionTypes";

const initialState: AppState = {
  products: [],
  categories: [],
  users: [],
  cart: [],
  favorites: [],
  search: [],
  user: null,
};

const rootReducer = (state = initialState, action: Action): AppState => {
  switch (action.type) {
    case ActionTypes.GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ActionTypes.CREATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
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
      case ActionTypes.GET_ALL_USERS:
        return {
          ...state,
          users: action.payload,
        };
        case ActionTypes.REGISTER:
          return {
            ...state,
            user: action.payload,
          };
      case ActionTypes.LOGIN:
        return {
          ...state,
          user: action.payload,
        };
      case ActionTypes.LOGOUT:
        return {
          ...state,
          user: null,
        };
      case ActionTypes.ADD_TO_CART:
          return {
            ...state,
            cart: [...state.cart, action.payload],
          }
      // case ActionTypes.REMOVE_FROM_CART:
      //     return {
      //       ...state,
      //       cart: state.cart.filter((product) => product._id !== action.payload._id),
      //     }
      case ActionTypes.ADD_FAVORITE:
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
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

export default rootReducer;