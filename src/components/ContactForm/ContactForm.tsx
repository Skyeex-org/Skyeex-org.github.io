import { FC } from "react";
import {
    ContactWrapper, ContactHeader,
    ContactInput, ContactParagraph,
    ContactTextArea, ContactTextBox, ContactFormWrapper
} from "@components/components/ContactForm/ContactForm.css";
import {
    SeparatorSpace,
    FlexColumn,
    FlexContainer, Button
} from "@components/components/GeneralStyleSheet/GeneralStyleSheet";

export const ContactForm: FC = () => {
    return (
        <ContactWrapper>
            <FlexContainer>
                <FlexColumn columnPercentage={30}>
                    <ContactTextBox>
                        <ContactHeader>Contact Details</ContactHeader>
                        <ContactParagraph>785 15h Street, Office 478</ContactParagraph>
                        <ContactParagraph>Berlin, De 81566</ContactParagraph>
                        <ContactParagraph>skyeex-org@gmail.com</ContactParagraph>
                        <ContactParagraph>+1 840 841 25 69</ContactParagraph>
                    </ContactTextBox>
                </FlexColumn>
                <FlexColumn columnPercentage={70}>
                    <ContactFormWrapper>
                        <ContactInput placeholder={'name'} />
                        <SeparatorSpace paddingValue={1} />
                        <ContactInput placeholder={'email'} />
                        <SeparatorSpace paddingValue={1} />
                        <ContactTextArea rows={12} placeholder={'message'} />
                        <SeparatorSpace paddingValue={1} />
                        <Button>Send Message</Button>
                    </ContactFormWrapper>
                </FlexColumn>
                <SeparatorSpace paddingValue={4} />
            </FlexContainer>
        </ContactWrapper>
    )
}