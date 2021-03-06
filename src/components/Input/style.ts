import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}
export const Container = styled.div<ContainerProps>`
    background: #232129;
    border-radius: 10px;
    width: 100%;
    padding: 15px;
    display: flex;
    align-items: center;

    border: 2px solid #232129;
    color: #666360;

    & + div {
        margin-top: 10px;
    }

    ${props =>
        props.isErrored &&
        css`
            border-color: #c53030;
        `}

    ${props =>
        props.isFocused &&
        css`
            color: #ff9000;
            border-color: #ff9000;
        `}

    ${props =>
        props.isFilled &&
        css`
            color: #ff9000;
        `}


    input {
        background: transparent;
        flex: 1;
        border: 0;
        color: #f4edeb;

        &::placeholder {
            color: #666360;
        }
    }

    svg {
        margin-right: 15px;
    }
`;

export const Error = styled(Tooltip)`
    height: 20px;
    margin-left: 16px;
    svg {
        margin: 0;
    }
    span {
        background: #c53030;
        color: #fff;
        &::before {
            border-color: #c53030 transparent;
        }
    }
`;
