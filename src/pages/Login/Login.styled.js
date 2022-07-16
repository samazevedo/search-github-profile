import styled from 'styled-components'

export const LoginStyled = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.2fr 1.8fr;
    justify-items: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transition: all 0.2s ease-in-out;
    & h1 {
        margin: 0;
        align-self: start;
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
    transition: all 0.5s ease-in-out;
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 30rem;
        height: 30rem;
    }
`
