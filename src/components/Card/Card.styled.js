import styled from 'styled-components'

export const CardStyled = styled.section`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    background-color: #000;
    color: ${({ theme }) => theme.colors.boneWhite};
    margin: 0 auto;
    padding: 0;
    border-radius: 0.2rem;
    box-shadow: 0.1rem 0.1rem 0.1rem ${({ theme }) => theme.colors.scubaBlue};
`
