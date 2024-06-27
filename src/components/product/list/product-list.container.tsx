import { ProductList } from './product-list.component';
import { useProducts } from '../../../products.hook';
import { Loader, ProductListWrapper } from './product-list.container.style';
import { ProductCreationContainer } from '../../product-сreate/product-creation.container';


export const ProductListContainer = () => {
    const { products, loading, error } = useProducts();
    if (error) return <>{error}</>;
    if (loading) return <Loader />;

    return (
        <ProductListWrapper>
            <ProductList products={products} />
            <ProductCreationContainer />
        </ProductListWrapper>
    );
};
