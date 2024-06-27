import { ProductModel } from "../../data/product.model";

export interface ProductStateModel{
    products: ProductModel[],
    error: string,
    loading: boolean
}