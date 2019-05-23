import React from 'react';

import styled from 'styled-components';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import NewsletterForm from '../forms/NewsletterForm';
import { GH2, GH6 } from '../../design/typography';

const url =
    'https://gearheadforge.us14.list-manage.com/subscribe/post?u=ae763632ad6fbccfe6298225f&amp;id=5068074b35';

const NewsletterBlock = () => {
    return (
        <NewsLetterBlockContainer>
            <GH2>Sign up stay informed</GH2>
            <GH6>Gearhead Forge Newsletter</GH6>
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                    <NewsletterForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </NewsLetterBlockContainer>
    );
};

const NewsLetterBlockContainer = styled.div`
    background: var(--black-color);
    padding: 74px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    ${GH2} {
        color: var(--accent-color);
        padding-bottom: 16px;
    }

    ${GH6} {
        color: var(--light-gray-color);
        padding-bottom: 32px;
    }
`;

export default NewsletterBlock;
