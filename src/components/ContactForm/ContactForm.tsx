import React, { FC, useEffect, useState } from "react";
import {
    ContactFormWrapper,
    ContactHeader,
    ContactInput,
    ContactParagraph,
    ContactSvg,
    ContactTextArea,
    ContactTextBox,
    ContactWrapper
} from "@components/components/ContactForm/ContactForm.css";
import {
    Button,
    FlexColumn,
    FlexContainer,
    SeparatorSpace, StandardBackground
} from "@components/components/GeneralStyleSheet/GeneralStyleSheet";
import { FooterConfig, formSubmitCodeUrl } from "@components/configs/general";
import ContactUsSvg from "../../assets/svgs/contact-us.svg";
import { useGetScreenSize } from "@components/utils/useGetScreenSize";
import { isValidEmail } from "@components/utils/general";

enum EmailElements {
    NAME = 'name',
    EMAIL = 'email',
    MESSAGE = 'message'
}

export const ContactForm: FC = () => {
    const { isDesktop } = useGetScreenSize();

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
        <StandardBackground>
            <ContactWrapper>
                <FlexContainer>
                    <FlexColumn columnPercentage={35}>
                        <ContactTextBox>
                            <ContactSvg src={ContactUsSvg.src} />
                            <ContactParagraph isBold={true}>{FooterConfig.metadataText}</ContactParagraph>
                            <ContactParagraph>Social Media Placeholder</ContactParagraph>
                        </ContactTextBox>
                    </FlexColumn>
                    <FlexColumn columnPercentage={65}>
                        {isDesktop() && (
                            <React.Fragment>
                                <ContactHeader>Send us a message!</ContactHeader>
                                <SeparatorSpace paddingValue={1.5} />
                            </React.Fragment>
                        )}
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
        </StandardBackground>
    )
}