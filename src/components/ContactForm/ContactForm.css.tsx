import styled from "styled-components";
import { Breakpoints, Colors, minWidthQuery } from "@components/utils/cssMedia";

export const ContactWrapper = styled.div`
    background: ${Colors.white};
    color: ${Colors.black};
    padding: 2rem;
  
    ${minWidthQuery(Breakpoints.large)} {
        padding: 8rem 5rem 2rem 5rem;
    }
    
    ${minWidthQuery(Breakpoints.xxLarge)} {
        padding: 2rem 10rem 6rem 10rem;
    }
`;

export const ContactFormWrapper = styled.form`
    text-align: center;
    margin-top: 4rem;

    ${minWidthQuery(Breakpoints.large)} {
        margin-top: 0;
    }
`;

export const ContactInput = styled.input`
    width: 90%;
    padding: 1rem;
    color: ${Colors.black};
    background: ${Colors.white};
    border-radius: 1rem;
    font-weight: bold;
    font-family: 'Open Sans', sans-serif;
    border: 0.1rem solid ${Colors.black};

    :focus {
        outline: none !important;
        border-color: ${Colors.coreDarkerBlue};
        box-shadow: 0 0 10px ${Colors.coreDarkerBlue};
    }

    ${minWidthQuery(Breakpoints.medium)} {
        width: 70%;
    }
  
    ${minWidthQuery(Breakpoints.large)} {
        width: 60%;
    }
`;

export const ContactTextArea = styled.textarea`
    color: ${Colors.black};
    background: ${Colors.white};
    font-weight: bold;
    border-radius: 1rem;
    width: 90%;
    padding: 1rem;
    resize: none;
    border: 0.1rem solid ${Colors.black};
    font-family: 'Open Sans', sans-serif;

    :focus {
        outline: none !important;
        border-color: ${Colors.coreDarkerBlue};
        box-shadow: 0 0 10px ${Colors.coreDarkerBlue};
    }

    ${minWidthQuery(Breakpoints.medium)} {
        width: 70%;
    }
  
    ${minWidthQuery(Breakpoints.large)} {
        width: 60%;
    }
`;

export const ContactHeader = styled.h1`
    padding: 1rem;
    font-size: 2.5rem;
    text-align: center;
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

export const ContactSvg = styled.img`
    width: 100%;

    ${minWidthQuery(Breakpoints.medium)} {
        width: 50%;
    }
  
    ${minWidthQuery(Breakpoints.large)} {
        width: 90%;
    }
`;