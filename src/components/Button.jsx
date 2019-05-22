import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GH6 } from '../design/typography';

const Button = props => {
    return renderButtonType(props);
};

const renderButtonType = props => {
    const text = props.text;
    switch (props.type) {
        case 'regular':
            return (
                <RegularButton onClick={props.onClick} size={props.size}>
                    <GH6>{text}</GH6>
                </RegularButton>
            );
        case 'secondary':
            return (
                <SecondaryButton onClick={props.onClick} size={props.size}>
                    <GH6>{text}</GH6>
                </SecondaryButton>
            );
    }
};

const ButtonBase = styled.button`
    display: flex;
    justify-content: center;
    padding: ${props =>
        (props.size === 'regular' && '20px 40px') ||
        (props.size === 'small' && '12px 32px')};
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

const RegularButton = styled(ButtonBase)``;

const SecondaryButton = styled(ButtonBase)`
    background: var(--accent-color);
    color: var(--black-color);
    border-color: var(--accent-color);

    &:hover {
        background: var(--accent-color);
        color: var(--black-color);
        opacity: 0.7;
    }
`;

Button.propTypes = {
    text: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['regular', 'small']),
    type: PropTypes.oneOf(['regular', 'secondary']),
};

Button.defaultProps = {
    size: 'regular',
    type: 'regular',
};

export default Button;
