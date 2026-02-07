import styled from "styled-components";


export const HeaderMenu = (props: { headerMenuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.headerMenuItems.map((item, index) => (
                        <ListItem key={index}>
                            <Link href="">{item}</Link>
                        </ListItem>
                    )
                )}
            </ul>
        </StyledHeaderMenu>
    )
        ;
};

const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        justify-content: center;
        gap: 30px;
    }
`;

const ListItem = styled.li`

`

const Link = styled.a`
    font-family: "Josefin Sans", sans-serif;
    font-weight: 400;
    font-size: 30px;
    text-align: center;
    color: #7572d5;
`