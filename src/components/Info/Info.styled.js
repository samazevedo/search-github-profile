import styled from 'styled-components'

export const InfoStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
    height: 100%;
`
export const InfoContent = styled.article`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    & .info-image {
        display: flex;
        align-items: center;
        width: 3rem;
        height: 3rem;
        border-radius: 3rem;
        background-color: ${({ theme }) => theme.colors.boneWhite};
    }
    & .info-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        & h3,
        p {
            margin: 0;
        }
    }
`
