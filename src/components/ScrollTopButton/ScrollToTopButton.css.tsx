import styled, { keyframes } from "styled-components";
import { Breakpoints, Colors, minWidthQuery } from "@components/utils/cssMedia";

const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

export const ScrollToTopButton = styled.button<{ isVisible: boolean }>`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background-color: ${Colors.coreBlue};
    color: ${Colors.white};
    border: none;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    z-index: 3;
    animation: ${(props) => (props.isVisible ? fadeIn : fadeOut)} 0.4s;
    visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
    
    :hover {
        background-color: ${Colors.coreDarkerBlue};
    }
    
    ${minWidthQuery(Breakpoints.large)} {
        width: 3.5rem;
        height: 3.5rem;
    }
`;

export const ScrollToTopIcon = styled.img`
    width: 50%;
    filter: brightness(0) invert(1);
    height: 50%;
`