import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";

export const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle>Contact</SectionTitle>
            <StyledForm>
                <Field placeholder="name"></Field>
                <Field placeholder="subject"></Field>
                <Field placeholder="message" as="textarea"></Field>
                <Button type="submit">Send message</Button>
            </StyledForm>
        </StyledContact>
    );
};

const StyledContact = styled.div`
    background-color: #63d6e8;
    min-height: 50vh;
`

const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
`

const Field = styled.input`

`

