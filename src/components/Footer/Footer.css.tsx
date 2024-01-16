import styled from "styled-components";
import { Colors } from "@components/utils/cssMedia";
import { Breakpoints, minWidthQuery } from "@components/utils/cssMedia";

export const FooterWrapper = styled.div`
    background: ${Colors.footerWrapperEbony};
    display: flex;
    color: ${Colors.footerTextWhite};
`;

export const FooterContainer = styled.div`
    width: 100%;
    margin: 5rem 0rem 1.5rem 0rem;
`;

export const FooterMetadataContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0rem 5rem 5rem 5rem;

    text-align: center;

    ${minWidthQuery(Breakpoints.medium)} {
        flex-direction: row;
        margin: 0rem 7.5rem 5rem 7.5rem;
        text-align: left;
    }
`;

export const FooterMetadataMotto = styled.div`
    font-size: 2.5rem;
    font-weight: bold;
    tect-align: center;
    margin-bottom: 5rem;

    ${minWidthQuery(Breakpoints.medium)} {
        width: 50%;
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }
`;

export const FooterMetadataContact = styled.div`
    text-align: center;
`;    

export const FooterMetadataTitle = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
`;
 
export const FooterMetadataText = styled.p`
    margin-top: 1rem;
`;

export const FooterLine = styled.div`
    background: white;
    height: 1px;
    margin: 0rem 5rem 0rem 5rem;
    opacity: 0.075;
`;

export const FooterCopyright = styled.div`
    text-align: center;
`;

export const FooterCopyrightText = styled.a`

`;