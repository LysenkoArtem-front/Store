import { ProductStateModel } from "../../models/state/product-state.model";
import { RootState } from "../store";

const selectProductState: (state: RootState) => ProductStateModel = (state: RootState) =>
state.product;

export const selectProducts = (state: RootState) => selectProductState(state).products;
export const selectLoading = (state: RootState) => selectProductState(state).loading;
export const selectError = (state: RootState) => selectProductState(state).error;

