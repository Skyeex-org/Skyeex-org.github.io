import React, { FC, useEffect, useState } from "react";
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

enum EmailElements {
    NAME = 'name',
    EMAIL = 'email',
    MESSAGE = 'message'
}

const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const ContactForm: FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [canSubmitForm, setCanSubmitForm] = useState<boolean>(false);
    const [wasFormDataSubmitted, setWasFormDataSubmitted] = useState<boolean>(false);

    const isNameFieldValid = (): boolean => {
        return !(name.trim() === '');
    };

    const isEmailFieldValid = (): boolean => {
        return !(email.trim() === '' || !isValidEmail(email.trim()));
    };

    const isMessageFieldValid = (): boolean => {
        return !(message.trim() === '');
    };

    const handleInputNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleInputEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleInputMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    };

    const onSubmitFormProcess = () => {
        setWasFormDataSubmitted(true);
    };

    const clearFormInputs = () => {
        setName('');
        setEmail('');
        setMessage('');
    };

    useEffect(() => {
        setCanSubmitForm(isNameFieldValid() && isEmailFieldValid() && isMessageFieldValid())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name, email, message]);

    useEffect(() => {
        if (wasFormDataSubmitted) {
            clearFormInputs();
            setWasFormDataSubmitted(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [wasFormDataSubmitted]);

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
                    <ContactFormWrapper action={formSubmitCodeUrl} method="POST" onSubmit={onSubmitFormProcess}>
                        <ContactInput
                            placeholder={EmailElements.NAME}
                            name={EmailElements.NAME}
                            onChange={handleInputNameChange}
                        />
                        <SeparatorSpace paddingValue={1} />
                        <ContactInput
                            placeholder={EmailElements.EMAIL}
                            type={EmailElements.EMAIL}
                            name={EmailElements.EMAIL}
                            onChange={handleInputEmailChange}
                        />
                        <SeparatorSpace paddingValue={1} />
                        <ContactTextArea
                            rows={12}
                            placeholder={EmailElements.MESSAGE}
                            name={EmailElements.MESSAGE}
                            onChange={handleInputMessageChange}
                        />
                        <SeparatorSpace paddingValue={1} />
                        <Button disabled={!canSubmitForm}>Send Message</Button>
                    </ContactFormWrapper>
                </FlexColumn>
                <SeparatorSpace paddingValue={3} />
            </FlexContainer>
        </ContactWrapper>
    )
}