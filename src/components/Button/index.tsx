/* eslint-disable no-use-before-define */
import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './style';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
    <Container>{children}</Container>
);

export default Button;
