import styled from "styled-components";
import { Colors } from "@components/utils/cssMedia";

export const Button = styled.button`
    background: ${Colors.coreBlue};
    padding: 1.2rem 3rem 1.2rem 3rem;
    color: ${Colors.white};
    font-weight: bold;
    border: none;
    font-size: 1rem;
    border-radius: 5rem;
    transition: all 500ms ease;
    
    :hover {
        background: ${Colors.coreDarkerBlue};
    }
`;

export const SeparatorSpace = styled.div<{ paddingValue: number }>`
    padding: ${(props) => props.paddingValue}rem;
`;

export const SeparatorMargin = styled.div<{ marginValue: number }>`
    margin: ${(props) => props.marginValue}rem;
`;
