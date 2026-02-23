import {Logo} from "../../components/logo/Logo.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";
import {MobileMenu} from "./mobileMenu/MobileMenu.tsx";
import * as React from "react";
import {S} from "./Header_Styles.ts";

const items = ["Home", "Skills", "Works", "Testimony", "Contacts"]

export const Header: React.FC = () => {
    return (
        <S.Header>
            <Container>
                <FlexWrapper justify="space-between" alignItem="center">
                    <Logo/>
                    <HeaderMenu headerMenuItems={items}/>
                    <MobileMenu headerMenuItems={items}/>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};




