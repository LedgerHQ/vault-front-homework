import React from 'react';
import styled from 'styled-components';

type Props = {
    placeholder: string;
    value: string;
    onChange: (v: string) => void;
};

const Input = ({ value, onChange, placeholder }: Props) => {
    // FIXME `any` is not perfect
    const handleChange = (e: any) => {
        onChange(e.target.value);
    };
    return (
        <StyledInput type="text" value={value} onChange={handleChange} placeholder={placeholder} />
    );
};

const StyledInput = styled.input`
    padding: 8px;
    border: 1px solid hsl(0, 0%, 10%);
    border-radius: 4px;
`;

export default Input;
