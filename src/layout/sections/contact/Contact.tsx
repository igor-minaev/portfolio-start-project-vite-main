import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Button} from "../../../components/Button.ts";
import {Container} from "../../../components/Container.ts";
import React, {FormEvent, useRef} from "react";
import {S} from './Contacts_Styles.ts'
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return
        emailjs
            .sendForm('service_s3jtq9n', 'template_2kj826w', form.current, {
                publicKey: 'D-UOQAFao4iWo7jZ7',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        (e.target as HTMLFormElement).reset();
    };
    return (
        <S.Contact id="contact">
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Field required placeholder="name" name="subject"></S.Field>
                    <S.Field required placeholder="subject" name="user_name"></S.Field>
                    <S.Field required placeholder="email" name="email"></S.Field>
                    <S.Field required placeholder="message" as="textarea" name="message"></S.Field>
                    <Button type="submit">Send message</Button>
                </S.Form>
            </Container>
        </S.Contact>
    );
};



