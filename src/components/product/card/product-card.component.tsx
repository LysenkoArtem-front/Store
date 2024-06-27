import { memo, FC } from 'react';

import { Card, Image, ProductInfo, ProductPrice } from './product-card.style';
import { ProductModel } from '../../../data/product.model';
import { Descriotion } from '../../description/description';
// type ProductProps = ProductModel;
export type ProductProps = ProductModel;

export const ProductCard: FC<ProductProps> = memo(({ title, price, description, image }) => {
    return (
        <Card>
            <Image src={image} alt={title} />
            <ProductInfo>
                <h2>{title}</h2>
                <Descriotion text={description} />
                {/* <span>{description}</span> */}
            </ProductInfo>
            <ProductPrice>{price}$</ProductPrice>
            
        </Card>
    );
});
