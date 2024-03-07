import React, { FC } from "react";
import { SeparatorMargin } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";
import {
    HeadlineParagraph,
    ProjectsContainer,
    TopHeadliner,
    HeadlineTitle
} from "@components/components/Projects/Projects.css";

export type HeadlineMetadataContainerType = {
    topHeadliner: string;
    headlineTitle: string;
};

export const HeadlineMetadataContainer: FC<HeadlineMetadataContainerType> = ({ topHeadliner, headlineTitle }) => {
    return (
        <ProjectsContainer>
            <SeparatorMargin marginValue={1.5} />
            <TopHeadliner>
                <HeadlineParagraph>{topHeadliner}</HeadlineParagraph>
            </TopHeadliner>
            <HeadlineTitle>
                <HeadlineParagraph>{headlineTitle}</HeadlineParagraph>
            </HeadlineTitle>
            <SeparatorMargin marginValue={3} />
        </ProjectsContainer>
    )
}