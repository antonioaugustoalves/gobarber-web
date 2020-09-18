/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import logo from '../../assets/logo.svg';
import { Container, Content, Background, AnimationContainer } from './styles';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const handleSubmit = useCallback(async (data: object) => {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                name: Yup.string().required('O nome é obrigatório.'),
                email: Yup.string()
                    .required('O e-mail é obrigatório.')
                    .email('Digite um e-mail válido'),
                password: Yup.string().min(
                    6,
                    'A senha deve ter pelo menos 6 caracteres.',
                ),
            });
            await schema.validate(data, {
                abortEarly: false,
            });
        } catch (err) {
            const errors = getValidationErrors(err);
            formRef.current?.setErrors(errors);
            console.log(err);
        }
    }, []);
    return (
        <Container>
            <Background />
            <Content>
                <AnimationContainer>
                    <img src={logo} alt="Gobarber web" />
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Faça seu cadastro agora.</h1>
                        <Input name="name" placeholder="Nome" icon={FiUser} />
                        <Input
                            name="email"
                            placeholder="E-mail"
                            icon={FiMail}
                        />
                        <Input
                            type="password"
                            name="password"
                            placeholder="Senha"
                            icon={FiLock}
                        />
                        <Button type="submit">Cadastrar</Button>
                    </Form>
                    <Link to="/">
                        <FiArrowLeft />
                        Voltar para a página de logon
                    </Link>
                </AnimationContainer>
            </Content>
        </Container>
    );
};

export default SignUp;
