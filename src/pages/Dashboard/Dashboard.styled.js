import styled from 'styled-components'

export const DashboardStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & :not(:first-child) {
        max-width: 100rem;
    }
`
