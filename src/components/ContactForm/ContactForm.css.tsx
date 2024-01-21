import styled from "styled-components";
import { Breakpoints, Colors, minWidthQuery } from "@components/utils/cssMedia";

export const ContactWrapper = styled.div`
    background: ${Colors.white};
    color: ${Colors.black};
    padding: 2rem;
  
    ${minWidthQuery(Breakpoints.large)} {
        padding: 8rem 6rem 2rem 6rem;
    }
    
    ${minWidthQuery(Breakpoints.xxLarge)} {
        padding: 2rem 12rem 6rem 12rem;
    }
`;

export const ContactFormWrapper = styled.form`
    text-align: center;
`;

export const ContactInput = styled.input`
    width: 60%;
    padding: 1rem;
    color: ${Colors.black};
    background: ${Colors.white};
    border-radius: 2.5rem;
    font-weight: bold;
    font-family: 'Open Sans', sans-serif;
    border: 0.1rem solid ${Colors.black};

    :focus {
        outline: none !important;
        border-color: ${Colors.coreDarkerBlue};
        box-shadow: 0 0 10px ${Colors.coreDarkerBlue};
    }
`;

export const ContactTextArea = styled.textarea`
    color: ${Colors.black};
    background: ${Colors.white};
    font-weight: bold;
    border-radius: 2.5rem;
    width: 60%;
    padding: 1rem;
    resize: none;
    border: 0.1rem solid ${Colors.black};
    font-family: 'Open Sans', sans-serif;

    :focus {
        outline: none !important;
        border-color: ${Colors.coreDarkerBlue};
        box-shadow: 0 0 10px ${Colors.coreDarkerBlue};
    }
`;

export const ContactHeader = styled.h1`
    padding: 1rem;
    font-size: 2.5rem;
`;

export const ContactParagraph = styled.p<{ isBold?: boolean }>`
    padding: 0.5rem;
    font-weight: ${(props) => props.isBold ? 'bold' : 'none'};
`;


export const ContactTextBox = styled.div`
    text-align: center;
  
    ${ContactParagraph} {
        font-size: 1.2rem;
    }
`;
