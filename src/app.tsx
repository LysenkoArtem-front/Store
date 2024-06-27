// import { ProductModel } from './data/ProductListData/product.model';
// import { fetchProducts } from './data/ProductListData/product.data';
import { Provider } from 'react-redux';
import { ProductListContainer } from './components/product/list/product-list.container';
import { store } from './store/store';

function App() {
    return (
        <Provider store={store}>
            <ProductListContainer />
        </Provider>
    );
}

export default App;
