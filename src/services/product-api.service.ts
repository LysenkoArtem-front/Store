import axios from 'axios';

import { PRODUCTS_URL } from '../constants/api.constants';
import {
    fetchProductsFailureAction,
    setProductsLoadingAction,
    setProductsAction,
    createNewProduct,
} from '../store/product/product.slice';
import { store } from '../store/store';
import { ProductModel } from '../data/product.model';

export async function fetchProducts(): Promise<ProductModel[] | undefined> {
    store.dispatch(setProductsLoadingAction(true));
    try {
        const response = await axios.get<ProductModel[]>(PRODUCTS_URL);
        store.dispatch(setProductsAction(response.data));
        return response.data;
    } catch (error) {
        store.dispatch(fetchProductsFailureAction(`Something went wrong! Error: ${error}`));
    } finally {
        store.dispatch(setProductsLoadingAction(false));
    }
}

interface ProductsProps {
    title: string;
    description: string;
}
export const addProduct = async ({ title, description }: ProductsProps): Promise<ProductModel | undefined> => {
    store.dispatch(setProductsLoadingAction(true));
    try {
        const response = await axios.post<ProductModel>(PRODUCTS_URL, {
            title,
            description,
        });
        store.dispatch(createNewProduct(response.data));
        return response.data;
    } catch (error) {
        store.dispatch(fetchProductsFailureAction(`Something went wrong! Error: ${error}`));
    } finally {
        store.dispatch(setProductsLoadingAction(false));
    }
};

