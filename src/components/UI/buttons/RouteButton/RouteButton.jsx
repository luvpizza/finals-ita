import React from 'react';
import s from './RouteButton.module.scss'
const RouteButton = ({children, className, ...rest}) => {
    return (
        <button className={`${s.btn_route} ${className}`.trim()} {...rest}>{children}</button>
    );
};

export default RouteButton;