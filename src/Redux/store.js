"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_thunk_1 = require("redux-thunk"); // Importar correctamente thunk
const extension_1 = require("@redux-devtools/extension");
const reducer_1 = __importDefault(require("./reducer"));
const store = (0, redux_1.createStore)(reducer_1.default, (0, extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.thunk)));
exports.default = store;
