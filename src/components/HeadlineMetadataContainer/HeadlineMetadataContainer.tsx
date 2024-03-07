import React, { FC } from "react";
import { SeparatorMargin, StandardWrapper } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";
import {
    HeadlineParagraph, HeadlineTitle,
    TopHeadliner
} from "@components/components/HeadlineMetadataContainer/HeadlineMetadataContainer.css";

export type HeadlineMetadataContainerType = {
    topHeadliner: string;
    headlineTitle: string;
};

export const HeadlineMetadataContainer: FC<HeadlineMetadataContainerType> = ({ topHeadliner, headlineTitle }) => {
    return (
        <StandardWrapper>
            <SeparatorMargin marginValue={1.5} />
            <TopHeadliner>
                <HeadlineParagraph>{topHeadliner}</HeadlineParagraph>
            </TopHeadliner>
            <HeadlineTitle>
                <HeadlineParagraph>{headlineTitle}</HeadlineParagraph>
            </HeadlineTitle>
            <SeparatorMargin marginValue={3} />
        </StandardWrapper>
    )
}