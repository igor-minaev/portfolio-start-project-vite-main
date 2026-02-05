import photo from "../../../assets/images/photo.jpg"
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper alignItem="center" justify="space-around">
                <div>
                    <span>Hi There</span>
                    <Name>I am Ihar Minayeu</Name>
                    <MainTitle>A Web Developer.</MainTitle>
                </div>
                <Photo src={photo} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};

// section or div
const StyledMain = styled.section`
    min-height: 100vh;
    background-color: rgba(255, 253, 129, 0.82);
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`

const MainTitle = styled.h1`

`

const Name = styled.h2`

`