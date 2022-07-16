import styled from 'styled-components'

export const DashboardStyled = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.3fr 1.7fr;
    justify-items: center;
    & .dashboard-container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        align-self: flex-start;
        width: 100%;
        margin: 0 2rem;
        padding: 1rem;
    }
`
