import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";


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
    background-color: #f1a76d;
    min-height: 30vh;
`

const Name = styled.span`

`

const SocialList = styled.ul`
    display: flex;
    gap: 30px;

`
const SocialItem = styled.li`

`

const SocialLink = styled.a`

`

const Copyright = styled.small`

`

