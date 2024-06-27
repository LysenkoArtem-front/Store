import { TextField } from '@mui/material';
// import { text } from 'body-parser';
import { ChangeEvent, FC, useState } from 'react';

interface InputProps {
    value: string;
    
}

export const Input: FC<InputProps> = ({ value, ...rest }) => {
    const [innerValue, setInnerValue] = useState(value);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInnerValue(event.target.value);
    };
    return <TextField value={innerValue} onChange={handleChange} {...rest} />;
};
