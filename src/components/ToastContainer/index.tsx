import React, { useCallback } from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { useTransition } from 'react-spring';
import Toast from './Toast';
import { Container } from './style';
import { ToastMessage } from '../../hooks/toast';

interface ToastContainerProps {
    messages: ToastMessage[];
}
const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
    const animatedMessages = useTransition(messages, message => message.id, {
        from: { right: '-120%', opacity: 0 },
        enter: { right: '0', opacity: 1 },
        leave: { right: '-120%', opacity: 0 },
    });
    return (
        <Container>
            {animatedMessages.map(({ item, key, props }) => (
                <Toast key={key} style={props} message={item} />
            ))}
        </Container>
    );
};

export default ToastContainer;