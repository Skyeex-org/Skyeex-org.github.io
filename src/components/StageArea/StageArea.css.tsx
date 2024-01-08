import styled from "styled-components";
import StageAreaWallpaper from '../../assets/StageArea.jpg';
import { Breakpoints, minWidthQuery } from "@components/utils/cssMedia";

export const StageAreaWrapper = styled.div`
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url(${StageAreaWallpaper.src}) fixed
    center;
    background-size: cover;
    position: relative;
    height: 100vh;
    color: #fff;
`;

export const StageAreaContentContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    width: 100%;
`;

export const StageAreaWelcomeText = styled.div`
    font-size: 3rem;
    font-weight: bold;

    ${minWidthQuery(Breakpoints.medium)} {
        font-size: 4rem;
    }
`;

export const StageAreaUnderText = styled.div`
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

export const LogoWrapper = styled.div`
    height: 1px;
    width: 100%;
    position: absolute;
`;

export const Logo = styled.div`
    font-size: 3rem;
    color: white;
    font-weight: bold;
    padding: 2rem;
`;

export const LogoLine = styled.div`
    background: white;
    height: 1px;
    width: 100%;
    text-align: center;
    opacity: 0.3;
`;