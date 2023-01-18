import React from 'react';
import {
    Button as MUI_Button
} from '@mui/material'

export interface ButtonProps {
    label: string;
    color?: 'primary' | 'secondary';
    variant?: 'contained' | 'outlined' | 'text';
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    return <MUI_Button
        variant={props.variant}
        color={props.color}
        onClick={props.onClick}
    >
        {props.label}
    </MUI_Button>
}

export default Button;