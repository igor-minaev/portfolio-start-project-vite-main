import {SectionTitle} from "../../../components/SectionTitle.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu.tsx";
import {Work} from "./work/Work.tsx";
import socialImg from "../../../assets/images/proj-1.png"
import timerImg from "../../../assets/images/proj-2.png"
import {Container} from "../../../components/Container.ts";
import React, {useState} from "react";
import {S} from './Works_Styles.ts'


const tabsItems: Array<{ title: string, status: TabsStatusType}> = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "landing page",
        status: "landing"
    },
    {
        title: "React",
        status: "react"
    },
    {
        title: "spa",
        status: "spa"
    }
]

const workItems = [
    {
        id: crypto.randomUUID(),
        src: socialImg,
        title: "Social Network",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "spa"
    },
    {
        id: crypto.randomUUID(),
        src: timerImg,
        title: "Timer",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        type: "react"
    }
]

export const Works: React.FC = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState<TabsStatusType>('all')

    const filteredWorks = workItems.filter(w => currentFilterStatus === "all" ? w : w.type === currentFilterStatus)

    const changeFilterStatus = (newStatus: "all" | "landing" | "react" | "spa") =>
        setCurrentFilterStatus(newStatus)
    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus} currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify="space-between" alignItem="flex-start" wrap="wrap">
                    {filteredWorks.map(w => (
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

