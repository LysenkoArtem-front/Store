import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { fetchProducts } from './store/product/product.slice';
import { selectError, selectLoading, selectProducts } from './store/product/product.selector';
import { fetchProducts } from './services/product-api.service';

export const useProducts = () => {
    //
    const products = useSelector(selectProducts);
    const error = useSelector(selectError);
    const loading = useSelector(selectLoading);

    useEffect(() => {
        fetchProducts();
    }, []);
    return { products, loading, error };
};
