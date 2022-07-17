import styled from 'styled-components'

export const LoginStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: all 0.2s ease-in-out;
    padding: 1rem;
    & button {
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
