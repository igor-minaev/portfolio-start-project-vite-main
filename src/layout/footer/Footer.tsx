import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {S} from './Footer_Styles.ts'
import React from "react";

const socialItems = [
    {
        id: crypto.randomUUID(),
        iconId: "instagram"
    },
    {
        id: crypto.randomUUID(),
        iconId: "telegram"
    },
    {
        id: crypto.randomUUID(),
        iconId: "vk"
    },
    {
        id: crypto.randomUUID(),
        iconId: "linkedin"
    }
]

export const Footer:React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction="column" alignItem="center">
                <S.Name>Ihar</S.Name>
                <S.SocialList>
                    {socialItems.map(s => (
                        <S.SocialItem key={s.id}>
                            <S.SocialLink>
                                <Icon height="21" width="21" viewBox="0 0 21 21" iconId={s.iconId}/>
                            </S.SocialLink>
                        </S.SocialItem>
                    ))}
                </S.SocialList>
                <S.Copyright>© 2025 Ihar Minayeu, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};



