import styled from "styled-components";
import { Breakpoints, minWidthQuery } from "@components/utils/cssMedia";

export const FooterWrapper = styled.div`
    display: flex;
`;

export const FooterContainer = styled.div`
    width: 100%;
    margin: 0 0 1.5rem 0;
    
    ${minWidthQuery(Breakpoints.medium)} {
        margin: 5rem 0 1.5rem 0;
    }
`;

export const FooterMetadataContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 5rem 0 5rem 0;
    text-align: center;

    ${minWidthQuery(Breakpoints.medium)} {
        flex-direction: row;
        margin: 0 7.5rem 5rem 7.5rem;
        text-align: left;
    }
`;

export const FooterMetadataMotto = styled.div`
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 5rem;
    padding: 0.7rem;
  
    ${minWidthQuery(Breakpoints.medium)} {
        padding: 0;
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
    margin: 0 5rem 0 5rem;
    opacity: 0.075;
`;

export const FooterCopyright = styled.div`
    text-align: center;
`;

export const FooterCopyrightText = styled.a`

`;