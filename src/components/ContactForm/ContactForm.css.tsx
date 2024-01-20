import styled from "styled-components";
import { Breakpoints, Colors, minWidthQuery } from "@components/utils/cssMedia";

export const ContactFormWrapper = styled.div`
    height: 100vh;
    background: ${Colors.white};
    color: ${Colors.black};
    padding: 2rem;

    ${minWidthQuery(Breakpoints.large)} {
        padding: 8rem 4rem 2rem 4rem;
    }
    
    ${minWidthQuery(Breakpoints.xxLarge)} {
        padding: 2rem 12rem 6rem 12rem;
    }
`;

export const ContactInput = styled.input`
    width: 100%;
    padding: 1rem;
    color: ${Colors.black};
    background: ${Colors.white};
    border-radius: 2.5rem;
    font-weight: bold;
    border-style: solid;
`;

export const ContactTextArea = styled.textarea`
    color: ${Colors.black};
    background: ${Colors.white};
    font-weight: bold;
    border-radius: 2.5rem;
    width: 100%;
    padding: 1rem;
    resize: none;
    border-style: solid;
`;

export const ContactInputsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    ${ContactInput} {
        margin: 2rem;
    }
`;