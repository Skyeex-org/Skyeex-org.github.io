import { FC } from "react";
import {
    ContactFormWrapper,
    ContactInput,
    ContactTextArea
} from "@components/components/ContactForm/ContactForm.css";
import {
    SeparatorSpace,
    FlexColumn,
    FlexContainer
} from "@components/components/GeneralStyleSheet/GeneralStyleSheet";

export const ContactForm: FC = () => {
    return (
        <ContactFormWrapper>
            <FlexContainer>
                <FlexColumn columnPercentage={50}>
                    <h1>Contact Details</h1>
                    <p>785 15h Street, Office 478</p>
                    <p>Berlin, De 81566</p>
                    <p>info@email.com</p>
                    <p>+1 840 841 25 69</p>
                </FlexColumn>
                <FlexColumn columnPercentage={50}>
                    <ContactInput placeholder={'name'} />
                    <SeparatorSpace paddingValue={1} />
                    <ContactInput placeholder={'email'} />
                    <SeparatorSpace paddingValue={1} />
                    <ContactTextArea rows={12} />
                </FlexColumn>
            </FlexContainer>
        </ContactFormWrapper>
    )
}