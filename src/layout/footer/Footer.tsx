import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";


export const Footer = () => {
    return (
        <StyledFooter>
            <Name>Ihar</Name>
            <SocialList>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId="instagram"/>
                    </SocialLink>
                </SocialItem>
            </SocialList>
            <Copyright>© 2025 Ihar Minayeu, All Rights Reserved.</Copyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`

`

const Name = styled.span`

`

const SocialList = styled.ul`

`
const SocialItem = styled.li`

`

const SocialLink = styled.a`

`

const Copyright = styled.small`

`

