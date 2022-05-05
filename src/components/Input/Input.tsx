import React from 'react';
import styled from 'styled-components';
import { TextField } from '@mui/material';

type Props = {
    placeholder: string;
    value: string;
    onChange: (v: string) => void;
};

const Input = ({ value, onChange, placeholder }: Props) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };
    return (
        <StyledTextField
            type="text"
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
        />
    );
};

const StyledTextField = styled(TextField)`
    width: 30vw;
`;

export default Input;
