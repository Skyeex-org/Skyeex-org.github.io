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
import { ContactConfig, formSubmitCodeUrl } from "@components/configs/general";

export const ContactForm: FC = () => {
    return (
        <ContactWrapper>
            <FlexContainer>
                <FlexColumn columnPercentage={25}>
                    <ContactTextBox>
                        <ContactHeader>Contact Details</ContactHeader>
                        <SeparatorSpace paddingValue={1} />
                        <ContactParagraph>{ContactConfig.addressPartOne}</ContactParagraph>
                        <ContactParagraph>{ContactConfig.addressPartTwo}</ContactParagraph>
                        <ContactParagraph isBold={true}>{ContactConfig.email}</ContactParagraph>
                        <ContactParagraph>{ContactConfig.phoneNumber}</ContactParagraph>
                    </ContactTextBox>
                </FlexColumn>
                <FlexColumn columnPercentage={75}>
                    <ContactFormWrapper action={formSubmitCodeUrl} method="POST">
                        <ContactInput placeholder={'name'} name={'name'} />
                        <SeparatorSpace paddingValue={1} />
                        <ContactInput placeholder={'email'} type={'email'} name={'email'}/>
                        <SeparatorSpace paddingValue={1} />
                        <ContactInput placeholder={'subject'} name={'subject'}/>
                        <SeparatorSpace paddingValue={1} />
                        <ContactTextArea rows={12} placeholder={'message'} name={'message'} />
                        <SeparatorSpace paddingValue={1} />
                        <Button>Send Message</Button>
                    </ContactFormWrapper>
                </FlexColumn>
                <SeparatorSpace paddingValue={4} />
            </FlexContainer>
        </ContactWrapper>
    )
}