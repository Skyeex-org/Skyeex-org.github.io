import styled from "styled-components";
import { Breakpoints, Colors, minWidthQuery } from "@components/utils/cssMedia";

export const ContactWrapper = styled.div`
    height: 100vh;
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

export const ContactFormWrapper = styled.div``;

export const ContactInput = styled.input`
    width: 80%;
    padding: 1rem;
    color: ${Colors.black};
    background: ${Colors.white};
    border-radius: 2.5rem;
    font-weight: bold;
    font-family: 'Open Sans', sans-serif;
    border: 0.1rem solid ${Colors.black};

    :focus {
        outline: none !important;
        border-color: #719ECE;
        box-shadow: 0 0 10px #719ECE;
    }
`;

export const ContactTextArea = styled.textarea`
    color: ${Colors.black};
    background: ${Colors.white};
    font-weight: bold;
    border-radius: 2.5rem;
    width: 80%;
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

export const ContactTextBox = styled.div`
    text-align: center;
`;

export const ContactHeader = styled.h1`
    padding: 1rem;
`;

export const ContactParagraph = styled.p`
    padding: 0.5rem;
`;
