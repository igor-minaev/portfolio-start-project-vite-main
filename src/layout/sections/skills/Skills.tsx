import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.ts";
import React from "react";
import {S} from './Skills_Styles.ts'

type SkillItem = {
    id: string
    iconId: string
    title: string
    description: string
}
const skillItems: Array<SkillItem> = [
    {
        id: crypto.randomUUID(),
        iconId: "code",
        title: "html5",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        id: crypto.randomUUID(),
        iconId: "css",
        title: "css3",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        id: crypto.randomUUID(),
        iconId: "react",
        title: "React",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        id: crypto.randomUUID(),
        iconId: "typescript",
        title: "typescript",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        id: crypto.randomUUID(),
        iconId: "styledComponents",
        title: "styled components",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        id: crypto.randomUUID(),
        iconId: "figma",
        title: "web design",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    }
]


export const Skills: React.FC = () => {
    return (
        <S.Skills id="skills">
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap="wrap" justify="space-between">
                    {skillItems.map(s => (
                        <Skill key={s.id}
                               iconId={s.iconId}
                               title={s.title}
                               description={s.description}/>
                    ))}
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};


