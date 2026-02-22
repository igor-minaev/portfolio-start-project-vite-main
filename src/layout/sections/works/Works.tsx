import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {TabMenu} from "./tabMenu/TabMenu.tsx";
import {Work} from "./work/Work.tsx";
import socialImg from "../../../assets/images/proj-1.png"
import timerImg from "../../../assets/images/proj-2.png"
import {Container} from "../../../components/Container.tsx";


const worksItems = ["All", "landing page", "React", "spa"]

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify="space-between" alignItem="flex-start" wrap="wrap">
                    <Work
                        src={socialImg}
                        title="Social Network"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
                    <Work
                        src={timerImg}
                        title="Timer"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
   ${FlexWrapper}{
       gap: 30px;
   }
`