import styled from 'styled-components'

export const InfoStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
    height: 100%;
    margin: 1rem;
    /* display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 1rem 2rem;
    @media (min-width: 640px) {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    } */
`
export const InfoContent = styled.article`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    transition: all 0.3s ease-in-out;
    & .info-image {
        display: flex;
        align-items: center;
        justify-content: center;
        align-items: center;
        width: 3rem;
        height: 3rem;
        border-radius: 3rem;
        &.red {
            background-color: #ffa1a1;
            color: #ff0000;
        }
        &.blue {
            background-color: #b2b2ff;
            color: #0000ff;
        }
        &.green {
            background-color: #c5ffc5;
            color: #00ae00;
        }
        &.yellow {
            background-color: #ffffbd;
            color: #ffea00;
        }
    }

    & .info-icon {
        display: flex;
        width: 1rem;
        height: 1rem;
        color: #fff;
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
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: ${({ theme }) => theme.fontsize.small};
        & .info-image {
            width: 2rem;
            height: 2rem;
        }
        & .info-info {
            & h3,
            p {
                font-size: ${({ theme }) => theme.fontsize.small};
            }
        }
    }
`
