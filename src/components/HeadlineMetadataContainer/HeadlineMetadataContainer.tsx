import React, { FC } from "react";
import { SeparatorMargin, StandardWrapper } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";
import {
    HeadlineParagraph, HeadlineTitle,
    TopHeadliner
} from "@components/components/HeadlineMetadataContainer/HeadlineMetadataContainer.css";

export type HeadlineMetadataContainerType = {
    topHeadliner?: string;
    headlineTitle: string;
    disableBottomSeparator?: boolean;
};

export const HeadlineMetadataContainer: FC<HeadlineMetadataContainerType> = ({
    topHeadliner,
    headlineTitle,
    disableBottomSeparator
}) => {
    return (
        <StandardWrapper>
            <SeparatorMargin marginValue={1.5} />
            {topHeadliner &&
                <TopHeadliner>
                    <HeadlineParagraph>{topHeadliner}</HeadlineParagraph>
                </TopHeadliner>
            }
            <HeadlineTitle>
                <HeadlineParagraph>{headlineTitle}</HeadlineParagraph>
            </HeadlineTitle>
            {!disableBottomSeparator && <SeparatorMargin marginValue={3} />}
        </StandardWrapper>
    )
}