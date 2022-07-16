import styled from 'styled-components'

export const InfoStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5rem;
    grid-template-rows: 1fr;
    margin: 0 auto;
    & section {
        height: 6rem;
        width: 15rem;
    }
`
export const InfoContent = styled.article`
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    justify-items: center;
    & .info-image {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        width: 3rem;
        height: 3rem;
        border-radius: 3rem;
        margin: 0 auto;
        align-items: center;
        justify-items: center;
        background-color: ${({ theme }) => theme.colors.boneWhite};
    }
`
