import rootReducer from "./reducer";
declare const store: import("redux").Store<import("./types").AppState, import("./actions").Action, unknown> & {
    dispatch: import("redux-thunk").ThunkDispatch<any, undefined, import("redux").AnyAction>;
};
export type RootState = ReturnType<typeof rootReducer>;
export default store;
//# sourceMappingURL=store.d.ts.map