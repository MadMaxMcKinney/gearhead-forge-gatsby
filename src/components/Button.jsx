import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GH6 } from '../design/typography';

const Button = props => (
    <ButtonContainer onClick={props.onClick}>
        <GH6>{props.text}</GH6>
    </ButtonContainer>
);

const ButtonContainer = styled.button`
    display: flex;
    padding: 20px 40px;
    border: 1px solid var(--white-color);
    align-self: flex-start;
    transition: all 0.3s;
    color: var(--white-color);
    text-decoration: none;
    background: transparent;

    &:hover {
        background: var(--white-color);
        color: var(--black-color);
        text-decoration: none;
        cursor: pointer;
    }
    &:active,
    &:focus {
        outline: none;
    }
`;

Button.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Button;
