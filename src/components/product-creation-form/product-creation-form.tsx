import { FC, FormEvent, memo, useCallback, useState } from 'react';
import { FormWrapper } from './product-creation-form.styled';
import { Button, Input } from '@mui/material';
import { ProductCreationModel } from '../../models/ProductModel/product-creation-model';

type ProductCreationFormProps = {
    onSubmit: (product: ProductCreationModel) => void;
};

export const ProductCreationForm: FC<ProductCreationFormProps> = memo(({ onSubmit }) => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const handleSubmit = useCallback(
        (e: FormEvent) => {
            e.preventDefault();
            if (title.length > 0 && description.length > 0) {
                onSubmit({
                    title: title,
                    description: description,
                });
            }

            setTitle('');
            setDescription('');
        },
        [description, onSubmit, title]
    );
    return (
        <FormWrapper onSubmit={handleSubmit}>
            <Input onChange={e => setTitle(e.target.value)} name='title' />
            <Input onChange={e => setDescription(e.target.value)} name='description' />
            <Button type='submit'>Create</Button>
        </FormWrapper>
    );
});
