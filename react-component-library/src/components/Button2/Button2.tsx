import React from 'react';

export interface ButtonProps {
    label: string;
    onClick?: () => void;
}

const Button2: React.FC<ButtonProps> = (props: ButtonProps) => {
    return <button>
        {props.label}
    </button>
}

export default Button2;