import styled from "styled-components";
import LandingAreaWallpaper from '../../assets/LandArea.jpg';
import { Breakpoints, Colors, minWidthQuery } from "@components/utils/cssMedia";

export const LandingAreaWrapper = styled.div`
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url(${LandingAreaWallpaper.src}) fixed
    center;
    background-size: cover;
    position: relative;
    height: 100vh;
    color: ${Colors.white};
`;

export const LandingAreaContentContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${Colors.white};
    text-align: center;
    width: 100%;
`;

export const LandingAreaWelcomeText = styled.div`
    font-size: 3rem;
    font-weight: bold;

    ${minWidthQuery(Breakpoints.medium)} {
        font-size: 4rem;
    }
`;

export const LandingAreaUnderText = styled.div`
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: bold;
  
    * {
        display: inline-block;
        margin-left: 0.2rem;
    }

    ${minWidthQuery(Breakpoints.medium)} {
        font-size: 1.5rem;
    }
`;
