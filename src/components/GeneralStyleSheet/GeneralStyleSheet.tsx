import styled from "styled-components";

export const Button = styled.button`
    background: #448EE2;
    padding: 1rem 2.5rem 1rem 2.5rem;
    color: white;
    font-weight: bold;
    border: none;
    font-size: 1rem;
    border-radius: 5rem;
    transition: all 500ms ease;
    
    :hover {
        background: #346EB0;
    }
`;

export const Separator = styled.div<{ paddingValue: number }>`
    padding: ${(props) => props.paddingValue}rem;
`;