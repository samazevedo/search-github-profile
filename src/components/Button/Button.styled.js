import styled from 'styled-components'

export const ButtonStyled = styled.button`
    background-color: ${({ theme }) => theme.colors.bajaBlue};
    color: ${({ theme }) => theme.colors.boneWhite};
    border: none;
    border-radius: 0.2rem;
    padding: 0.5rem 1rem;
    font-size: ${({ theme }) => theme.fontsize.large};
    transition: all 0.3s ease-in-out;
    font-family: ${({ theme }) => theme.fonts.primary};
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.macawGreen};
        color: #ffffff;
    }
    &:focus {
        outline: none;
    }
    &:active {
        transform: scale(0.9);
    }
`
