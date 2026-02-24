import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {TabMenu} from "./tabMenu/TabMenu.tsx";
import {Work} from "./work/Work.tsx";
import socialImg from "../../../assets/images/proj-1.png"
import timerImg from "../../../assets/images/proj-2.png"
import {Container} from "../../../components/Container.tsx";
import React from "react";
import {S} from './Works_Styles.ts'

const worksItems = ["All", "landing page", "React", "spa"]
const workItems = [
    {
        id: crypto.randomUUID(),
        src: socialImg,
        title: "Social Network",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        id: crypto.randomUUID(),
        src: timerImg,
        title: "Timer",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"
    }
]

export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify="space-between" alignItem="flex-start" wrap="wrap">
                    {workItems.map(w => (
                        <Work key={w.id}
                              src={w.src}
                              title={w.title}
                              description={w.description}/>
                    ))}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

