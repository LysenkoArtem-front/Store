import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductStateModel } from '../../models/state/product-state.model';
import { ProductModel } from '../../data/product.model';

const initialState: ProductStateModel = {
    products: [],
    loading: false,
    error: '',
};

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProductsLoadingAction: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setProductsAction: (state, action: PayloadAction<ProductModel[]>) => {
            state.products = action.payload;
            state.error = '';
        },
        fetchProductsFailureAction: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        createNewProduct(state, action: PayloadAction<ProductModel>) {
            state.products.unshift(action.payload);
        },
    },
});
export const { setProductsLoadingAction, setProductsAction, fetchProductsFailureAction, createNewProduct } = productSlice.actions;
// rtk query,action
export default productSlice.reducer;
