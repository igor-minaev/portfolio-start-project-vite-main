import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Menu} from "../../../components/menu/Menu.tsx";


const worksItems = ["All", "landing page", "React", "spa"]

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper>

            </FlexWrapper>

        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    background-color: #95e0f1;
    min-height: 100vh;
`