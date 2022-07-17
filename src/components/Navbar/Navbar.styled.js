import styled from 'styled-components'

export const NavbarStyled = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.macawGreen};
    color: ${({ theme }) => theme.colors.boneWhite};
    align-items: center;

    & .img-container {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background-color: #fff;
        margin: 1rem;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        justify-self: center;
        align-items: center;
        justify-items: center;
    }
    & button {
        align-self: center;
        justify-self: flex-start;
        background-color: transparent;
        color: ${({ theme }) => theme.colors.bajaBlue};
        font-weight: 900;
        &:hover {
            color: ${({ theme }) => theme.colors.scubaBlue};
            background-color: transparent;
        }
    }
`
