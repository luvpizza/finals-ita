import React from 'react';
import s from './TextInput.module.scss'
const TextInput = ({
    className,
    ...props
}) => {
    return (
        <input className={`${s.text__input} ${className ? className: ""}`.trim()} {...props}/>
    );
};

export default TextInput;