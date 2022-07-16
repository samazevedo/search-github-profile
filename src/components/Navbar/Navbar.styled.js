import styled from 'styled-components'

export const NavbarStyled = styled.nav`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    width: 100%;
    height: fit-content;
    background-color: ${({ theme }) => theme.colors.macawGreen};
    color: ${({ theme }) => theme.colors.boneWhite};
    align-items: center;
    justify-items: center;
    & .img-container {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background-color: #fff;
        margin: 0.5rem;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        align-items: center;
        justify-items: center;
    }
    & button {
        background-color: transparent;
        color: ${({ theme }) => theme.colors.bajaBlue};
        font-weight: 900;
        &:hover {
            color: ${({ theme }) => theme.colors.scubaBlue};
            background-color: transparent;
        }
    }
`
