import styled from 'styled-components'

export const ErrorStyled = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 0.5fr 1fr;
    justify-items: center;
    font-size: ${({ theme }) => theme.fontsize.xxlarge};
    background-color: ${({ theme }) => theme.colors.boneWhite};
    color: ${({ theme }) => theme.colors.scubaBlue};
    width: 100%;
    & h1 {
        align-self: flex-end;
        margin: 0;
    }
    & p {
        align-self: flex-start;
    }
    & button {
        align-self: flex-start;
        font-size: ${({ theme }) => theme.fontsize.xxlarge};
    }
`
