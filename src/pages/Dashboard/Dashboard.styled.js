import styled from 'styled-components'

export const DashboardStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & .dashboard-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        padding: 2rem;
        max-width: 100rem;
    }
    & .user-followers-section {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        .user-followers-section {
            flex-direction: column;
        }
    }
`
