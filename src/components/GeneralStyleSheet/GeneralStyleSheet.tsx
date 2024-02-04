import styled from "styled-components";
import { Breakpoints, Colors, minWidthQuery } from "@components/utils/cssMedia";

export const Button = styled.button`
    background: ${Colors.coreBlue};
    padding: 1.2rem 3rem 1.2rem 3rem;
    color: ${Colors.white};
    font-weight: bold;
    border: none;
    font-size: 1rem;
    border-radius: 5rem;
    transition: all 500ms ease;
    cursor: pointer;
  
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

export const FlexContainer = styled.div<{ positionType: string }>`
    display: flex;
    flex-wrap: wrap;
    justify-content: ${(props) => props.positionType};
`;

export const FlexColumn = styled.div<{
    columnPercentage: number,
    shouldHaveBorder?: boolean,
    alignColumnsCenter?: boolean,
}>`
    flex: 1 1 100%;
    border-bottom: ${(props) => props.shouldHaveBorder ? '1px solid rgba(204, 204, 204, 0.7)' : 'none'};
    
    ${minWidthQuery(Breakpoints.large)} {
        flex: ${(props) => `1 1 ${props.columnPercentage}%;`}
        border-right: ${(props) => props.shouldHaveBorder ? '1px solid rgba(204, 204, 204, 0.7)' : 'none'};
        border-bottom: none;
    }${(props) => props.alignColumnsCenter && `
        display: flex;
        justify-content: center;
    `}
`;

export const TextContentWrapper = styled.div`
    background: ${Colors.white};
    color: ${Colors.black};
    padding: 2rem;
  
    ${minWidthQuery(Breakpoints.large)} {
        padding: 2rem 12rem 2rem 12rem;
        text-align: left;
    }
    
    ${minWidthQuery(Breakpoints.xxLarge)} {
        padding: 2rem 12rem 6rem 12rem;
    }
`;

export const SocialMediaWrapper = styled.div<{ isBackgroundLight: boolean}>`
    width: 2.5rem;
    height: 2.5rem;
    margin: 0 0.5rem 0 0.5rem;
    border-radius: 50%;
    transition: all 500ms ease;
    cursor: pointer;

    img {
        filter: ${(props) => (props.isBackgroundLight ? 'brightness(0)' : 'brightness(1)')};
    }

    :hover {
        background: ${Colors.coreDarkerBlue};
    }
`

export const SocialMediaIcon = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    padding: 0.5rem;
    transition: all 500ms ease;
  
    :hover {
        filter: brightness(0) invert(1);
    }
`;

export const StandardBackground = styled.div<{ background?: string, color?: string }>`
    background: ${(props) => props.background || Colors.white};
    color: ${(props) => props.color || Colors.black};
`