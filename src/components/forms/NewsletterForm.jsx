import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NewsletterForm = ({ status, message, onValidated }) => {
    let email, name;

    const submitForm = () =>
        email &&
        email.value.indexOf('@') > -1 &&
        onValidated({
            EMAIL: email.value,
        });

    const handleInputKeyPress = event => {
        if (event.key === 'Enter') {
            submitForm();
        }
    };

    return (
        <FormContainer>
            <InputContainer>
                <Input
                    ref={node => (email = node)}
                    placeholder="Enter your email"
                    onKeyDown={handleInputKeyPress}
                />
                <InputIconButton onClick={submitForm}>
                    <FontAwesomeIcon icon={['fal', 'chevron-right']} />
                </InputIconButton>
            </InputContainer>
            <MessageContainer>
                {status === 'sending' && <p>sending...</p>}
                {status === 'error' && (
                    <p
                        style={{ color: '#ef581c' }}
                        dangerouslySetInnerHTML={{ __html: message }}
                    />
                )}
                {status === 'success' && (
                    <p dangerouslySetInnerHTML={{ __html: message }} />
                )}
            </MessageContainer>
        </FormContainer>
    );
};

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    width: 100%;
`;

const MessageContainer = styled.div`
    margin-top: 16px;
    display: flex;
    justify-content: center;
`;

const InputContainer = styled.div`
    position: relative;
    width: 100%;
`;

const Input = styled.input`
    height: 48px;
    width: 100%;
    background: #161616;
    border: 1px solid transparent;
    color: var(--light-gray-color);
    padding: 0px 16px;
    font-family: 'Roboto';
    font-size: 1.6rem;
    transition: all 0.3s;

    &:hover,
    &:focus,
    &:active {
        outline: none;
        border-color: var(--accent-color);
    }
`;

const InputIconButton = styled.button`
    position: absolute;
    right: 8px;
    height: 100%;
    background: transparent;
    color: var(--accent-color);
    border: none;
    font-size: 2.6rem;
    cursor: pointer;
    transition: opacity 0.3s;

    &:hover {
        opacity: 0.8;
    }
`;

export default NewsletterForm;
