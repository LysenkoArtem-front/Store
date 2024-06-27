import { ProductModel } from '../../data/product.model';

export type ProductCreationModel = Pick<ProductModel, 'title' | 'description'>;
