import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const Footer = () => {
    return (
        <StaticQuery
            query={graphql`
                query FooterQuery {
                    file(relativePath: { eq: "logo.png" }) {
                        childImageSharp {
                            fixed(width: 200, height: 60) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                }
            `}
            render={data => (
                <FooterContainer>
                    <FooterLogo fixed={data.file.childImageSharp.fixed} />
                </FooterContainer>
            )}
        />
    );
};

const FooterContainer = styled.div`
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--black-color);
`;

const FooterLogo = styled(Img)`
    opacity: 0.4;
`;

export default Footer;
