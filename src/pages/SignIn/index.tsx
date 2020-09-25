import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import getValidationErrors from '../../utils/getValidationErrors';
import logo from '../../assets/logo.svg';
import { Container, Content, Background, AnimationContainer } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

// API de contexto
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

interface SignInFormData {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const { signIn } = useAuth();
    const { addToast } = useToast();
    const handleSubmit = useCallback(
        async (data: SignInFormData) => {
            try {
                formRef.current?.setErrors({});
                const schema = Yup.object().shape({
                    email: Yup.string()
                        .required('O e-mail é obrigatório.')
                        .email('Digite um e-mail válido'),
                    password: Yup.string().required(
                        'A senha deve ser informada',
                    ),
                });
                await schema.validate(data, {
                    abortEarly: false,
                });
                await signIn({
                    email: data.email,
                    password: data.password,
                });
            } catch (err) {
                if (err instanceof Yup.ValidationError) {
                    const errors = getValidationErrors(err);
                    formRef.current?.setErrors(errors);
                    return;
                }
                // Disparar um Toast
                addToast({
                    type: 'error',
                    title: 'Erro de autenticação',
                    description: 'Não foi possivel fazer login no GoBarber',
                });
            }
        },
        [signIn, addToast],
    );
    return (
        <Container>
            <Content>
                <AnimationContainer>
                    <img src={logo} alt="Gobarber web" />
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Acesse agora!</h1>
                        <Input
                            name="email"
                            placeholder="E-mail"
                            icon={FiMail}
                        />
                        <Input
                            name="password"
                            type="password"
                            placeholder="Senha"
                            icon={FiLock}
                        />
                        <Button type="submit">Entrar</Button>
                        <a href="forgot">Esqueci minha senha</a>
                    </Form>
                    <Link to="/signup">
                        <FiLogIn />
                        Criar conta
                    </Link>
                </AnimationContainer>
            </Content>
            <Background />
        </Container>
    );
};

export default SignIn;
