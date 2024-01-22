import styled from "styled-components";
import { Colors } from "@components/utils/cssMedia";

export const ScrollToTopButton = styled.button`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background-color: ${Colors.coreBlue};
    color: ${Colors.white};
    border: none;
    border-radius: 50%;
    width: 3.5rem;
    height: 3.5rem;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    z-index: 3;
  
    :hover {
        background-color: ${Colors.coreDarkerBlue};
    }
`;

export const ScrollToTopIcon = styled.img`
    width: 50%;
    filter: brightness(0) invert(1);
`