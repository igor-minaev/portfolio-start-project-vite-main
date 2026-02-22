import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {theme} from "../../styles/Theme.ts";
import {font} from "../../styles/Common.ts";


export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction="column" alignItem="center">
                <Name>Ihar</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon height="21" width="21" viewBox="0 0 21 21" iconId="instagram"/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height="21" width="21" viewBox="0 0 21 21" iconId="telegram"/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height="21" width="21" viewBox="0 0 21 21" iconId="vk"/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height="21" width="21" viewBox="0 0 21 21" iconId="linkedin"/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2025 Ihar Minayeu, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
`

const Name = styled.span`
    ${font({family: '"Josefin Sans", sans-serif', weight: 700, Fmax: 22, Fmin: 16})}
    letter-spacing: 0.14em;
`

const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;

`
const SocialItem = styled.li`

`

const SocialLink = styled.a`
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    width: 35px;
    height: 35px;

    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    color: ${theme.colors.accent};

    &:hover {
        background: ${theme.colors.accent};
        color: ${theme.colors.primaryBg};
        transform: translateY(-4px);
    }
`

const Copyright = styled.small`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    opacity: 0.5;
`

