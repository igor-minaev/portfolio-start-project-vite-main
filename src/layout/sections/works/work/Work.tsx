import {Link} from "../../../../components/Link.tsx";
import {Button} from "../../../../components/Button.tsx";
import React from "react";
import {S} from './../Works_Styles.ts'

type WorkPropsType = {
    src: string
    title: string
    description: string
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.src} alt=""/>
                <Button>view project</Button>
            </S.ImageWrapper>
            <S.Description>
                <S.WorkTitle>{props.title}</S.WorkTitle>
                <S.WorkText>{props.description}</S.WorkText>
                <Link href="">demo</Link>
                <Link href="">code</Link>
            </S.Description>
        </S.Work>
    );
};





