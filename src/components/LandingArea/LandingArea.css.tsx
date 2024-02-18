import styled from "styled-components";
import LandingAreaWallpaper from '../../assets/LandArea.jpg';
import { Breakpoints, Colors, minWidthQuery } from "@components/utils/cssMedia";

export const LandingAreaWrapper = styled.div<{
    height?: number,
    wallpaper?: string,
    darkLevel?: number,
    isMobile?: boolean,
}>`
    background: linear-gradient(to bottom, rgba(0, 0, 0, ${(props) => props.darkLevel || 0.6}), rgba(0, 0, 0, 0.1)), 
    url(${(props) => props.wallpaper || LandingAreaWallpaper.src}) ${(props) => !props.isMobile && 'fixed'} center;

    background-size: cover;
    position: relative;
    height: ${(props) => props.height || 100}vh;
    color: ${Colors.white};
`;

export const LandingAreaContentContainer = styled.div`
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${Colors.white};
    text-align: center;
`;

export const DetailPageLandingAreaContentContainer = styled.div`
    width: 100%;
    height: 100%;
    top: 85%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    color: ${Colors.white};
    text-align: center;
`;

export const LandingAreaWelcomeText = styled.div`
    font-size: 3rem;
    font-weight: bold;
    padding: 1rem;

    ${minWidthQuery(Breakpoints.medium)} {
        padding: 0.3rem;
        font-size: 4rem;
    }
    
    ${minWidthQuery(Breakpoints.large)} {
        padding: 0;
    }
`;

export const LandingAreaUnderText = styled.div`
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: bold;
    padding: 1rem;

    ${minWidthQuery(Breakpoints.medium)} {
        font-size: 1.5rem;
    }

    ${minWidthQuery(Breakpoints.large)} {
        padding: 0;
    }

    * {
        display: inline-block;
        margin-left: 0.2rem;
    }
`;

export const LandingAreaReferenceText = styled.div`
    font-size: 0.75rem;
    margin: 1rem;
    position: absolute;
    bottom: 35%;
`;
