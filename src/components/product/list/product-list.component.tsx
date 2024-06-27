import { FC } from 'react';

// import { Box } from '@mui/material';
import { ProductCard } from '../card/product-card.component';
import { ProductModel } from '../../../data/product.model';

interface ProductListProps {
    products: ProductModel[];
}
export const ProductList: FC<ProductListProps> = ({ products }) => {
    return (
        <div>
            {products.map(el => (
                <ProductCard key={el.id} {...el} />
            ))}
        </div>
    );
};
