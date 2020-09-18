import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import SignInBackground from '../../assets/sign-in-background.png';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align: stretch;
`;
const appearFromLeft = keyframes`
    from{
        opacity:0;
        transform:translateX(-50px);
    }

    to{
        opacity:1;
        transform:translateX(0);
    }
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;
    width: 100%;
    max-width: 700px;
    animation: ${appearFromLeft} 1s;
`;

export const AnimationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    form {
        margin: 60px 0;
        width: 340px;
        text-align: center;

        h1 {
            margin-bottom: 24px;
        }

        a {
            color: #f4ede8;
            text-decoration: none;
            display: block;
            margin-top: 24px;
            transition: color 0.5s;

            &:hover {
                color: ${shade(0.25, '#f4ede8')};
            }
        }
    }
    > a {
        color: #ff9000;
        text-decoration: none;
        display: block;
        margin-top: 16px;
        transition: color 0.5s;

        display: flex;
        align-items: center;

        &:hover {
            color: ${shade(0.3, '#FF9000')};
        }

        svg {
            margin-right: 16px;
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${SignInBackground}) no-repeat center;
    background-size: cover;
`;
