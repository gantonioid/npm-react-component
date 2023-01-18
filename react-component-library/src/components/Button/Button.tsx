import React from 'react';

interface Props {
    label: string;
}

const Button: React.FC<Props> = (props: Props) => {
    return <button>{props.label}</button>
}

export default Button;