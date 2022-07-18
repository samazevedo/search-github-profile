import styled from 'styled-components'

export const CardStyled = styled.section`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    background-color: #000;
    color: ${({ theme }) => theme.colors.boneWhite};
    border-radius: 0.2rem;
    box-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease-in-out;
    &::before {
        content: 'something';
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(-98%);
        width: 100%;
        align-self: flex-start;
        font-size: ${({ theme }) => theme.fontsize.small};
        text-transform: capitalize;
        letter-spacing: 0.1rem;
        color: ${({ theme }) => theme.colors.boneWhite};
        background-color: #000;
        padding: 0.2rem;
        border-radius: 0.2rem;
        border-bottom-left-radius: 0rem;
        border-bottom-right-radius: 0rem;
        margin-bottom: 0;
        align-items: flex-start;
        justify-content: flex-start;
        width: fit-content;
    }
`
