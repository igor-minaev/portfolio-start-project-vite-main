import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";
import {Container} from "../../../components/Container.tsx";
import React from "react";
import {S} from './Contacts_Styles.ts'

export const Contact:React.FC = () => {
    return (
        <S.Contact>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form>
                    <S.Field placeholder="name"></S.Field>
                    <S.Field placeholder="subject"></S.Field>
                    <S.Field placeholder="message" as="textarea"></S.Field>
                    <Button type="submit">Send message</Button>
                </S.Form>
            </Container>
        </S.Contact>
    );
};



