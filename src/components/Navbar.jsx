import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

export default () => (
    <StaticQuery
        query={graphql`
            query NavbarQuery {
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
            <NavContainer>
                <NavLogoContainer>
                    <Link to="/"><Img fixed={data.file.childImageSharp.fixed} /></Link>
                </NavLogoContainer>
                <NavItem>The Lifestyle</NavItem>
                <NavItem>The Forge</NavItem>
            </NavContainer>
        )}
    />
);

const NavContainer = styled.div`
    width: 100%;
    height: 80px;
    position: absolute;
    top: 0;
    z-index: 900;
    background: transparent;
    display: flex;
    align-items: center;
    flex-direction: row;
`;

const NavItem = styled.h6`
    font-size: 1.5rem;
    padding-left: 40px;
    @media (max-width: 710px) {
        display: none;
    }
`;

const NavLogoContainer = styled.div`
    display: flex;
    height: 100%;
    background: var(--black-color);
    padding: 0px 40px;
    align-items: center;
`;
