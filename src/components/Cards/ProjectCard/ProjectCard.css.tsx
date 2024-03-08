import styled from "styled-components";
import { Breakpoints, Colors, minWidthQuery } from "@components/utils/cssMedia";

export const ProjectCardTitle = styled.h2`
    height: 2.5rem;
    margin: 1.5rem 0 0 0;
    font-size: 1.25rem;
    transition: all 500ms ease;

    ${minWidthQuery(Breakpoints.medium)} {
        margin: 2.5rem 0 0 0;
        font-size: 1.5rem;
    }
`;

export const ProjectCardWrapper = styled.div`
    width: 75%;
    height: auto;
    background: ${Colors.paleWhite};
    border-radius: 0.85rem;
    margin: 2.5rem 1.25rem 0 1.25rem;
    user-select: none;
    transition: all 500ms ease;
    cursor: pointer;
    line-height: 1.5rem;
  
    ${minWidthQuery(Breakpoints.small)} {
        width: 60%;
        margin: 2.5rem 0.5rem 0 0.5rem;
    }

     ${minWidthQuery(Breakpoints.medium)} {
        width: 22rem;
        margin: 2.5rem 0.5rem 0 0.5rem;
    }

    :hover {
        box-shadow: 0 0 5rem rgba(33, 33, 33, .15);
      
        ${ProjectCardTitle} {
            color: ${Colors.coreDarkerBlue};
        }
    }

    * {
        border-radius: 0.85rem 0.85rem 0 0;
    }
`;

export const ProjectCardWrapperContainer = styled.div`
    margin: 0 1rem 3rem 1rem;

    ${minWidthQuery(Breakpoints.medium)} {
        margin: 0 1rem 0.5rem 1rem;
    }
`;

export const ProjectCardImage = styled.div<{ imageSource: string }>`
    width: 100%; 
    height: 12.5rem;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(${(props) => props.imageSource});
    background-size: cover; 
    background-position: center;
`;

export const ProjectCardDescription = styled.p`
    font-size: 1.15rem;
    color: ${Colors.paleGray};

    ${minWidthQuery(Breakpoints.medium)} {
        font-size: 1rem;
    }
`;

export const ProjectPartner = styled.img`
    width: 40%;
`;
