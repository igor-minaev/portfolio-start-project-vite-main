import {Menu} from "../menu/Menu.tsx";
import React, {useState} from "react";
import {S} from './../HeaderMenu_Styles.ts'


export const MobileMenu: React.FC = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => setMenuIsOpen(!menuIsOpen)
    return (
        <S.MobileMenu>
            <S.BurgerButton onClick={onBurgerBtnClick} isOpen={menuIsOpen}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={() => setMenuIsOpen(!menuIsOpen)}>
                <Menu/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    )
        ;
};






