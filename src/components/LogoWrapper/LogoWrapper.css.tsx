import styled from "styled-components";
import { Breakpoints, Colors, minWidthQuery } from "@components/utils/cssMedia";

export const LandingLogoWrapper = styled.div`
    height: 1px;
    width: 100%;
    position: absolute;
    text-align: center;

    ${minWidthQuery(Breakpoints.medium)} {
        text-align: left;
    }
`;

export const LandingLogo = styled.img`
    width: 13rem;
    padding: 0.2rem;
    cursor: pointer;
`;

export const LandingLogoLine = styled.div`
    background: ${Colors.white};
    height: 1px;
    width: 100%;
    text-align: center;
    opacity: 0.3;
`;