import styled from 'styled-components'

export const LoginStyled = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.5fr 1fr;
    justify-items: center;
    width: 100%;
    height: 100%;

    & h1 {
        margin: 0;
        align-self: flex-start;
    }
    & button {
        align-self: start;
        font-size: ${({ theme }) => theme.fontsize.xxlarge};
    }
`
export const ImageContainer = styled.div`
    background-image: url(${({ img }) => img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: ${({ theme }) => theme.colors.boneWhite};
    background-blend-mode: multiply;
    width: 50rem;
    height: 50rem;
    align-self: flex-end;
`
