import { CreateButton } from '../button/create-button';
import { memo, useCallback, useState } from 'react';
import { Modal } from '../modal/modal';
import { ProductCreationForm } from '../product-creation-form/product-creation-form';
import { addProduct } from '../../services/product-api.service';
import { ProductCreationModel } from '../../models/ProductModel/product-creation-model';

export const ProductCreationContainer = memo(() => {
    const [visible, setVisible] = useState(false);
    const handleClose = useCallback(() => {
        setVisible(false);
    }, []);
    const handleSubmit = useCallback(
        (product: ProductCreationModel) => {
            addProduct(product);
            handleClose();
        },
        [handleClose]
    );
    const handleClick = useCallback(() => {
        setVisible(true);
    }, []);

    return (
        <div>
            <CreateButton onClick={handleClick} />
            <Modal title='Create Product' visible={visible} onClose={handleClose}>
                <ProductCreationForm onSubmit={handleSubmit} />
            </Modal>
        </div>
    );
});
