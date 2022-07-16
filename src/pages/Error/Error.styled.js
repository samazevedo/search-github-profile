import styled from 'styled-components'

export const ErrorStyled = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 0.5fr 1fr;
    justify-items: center;
    width: 100%;
    & h1 {
        align-self: flex-end;
        margin: 0;
    }
    & p {
        align-self: flex-start;
    }
    & button {
        align-self: flex-start;
    }
`
