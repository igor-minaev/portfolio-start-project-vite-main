import styled from "styled-components";

type WorkPropsType = {
    src: string
    title: string
    description: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=""/>
            <WorkTitle>{props.title}</WorkTitle>
            <WorkText>{props.description}</WorkText>
            <Link href={"#"}>demo</Link>
            <Link href={"#"}>code</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: #e689fa;
    max-width: 540px;
    width: 100%;
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const WorkTitle = styled.h3`

`

const WorkText = styled.p`

`

const Link = styled.a`

`

