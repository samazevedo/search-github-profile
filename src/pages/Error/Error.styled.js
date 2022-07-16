import styled from 'styled-components'

export const ErrorStyled = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 0.5fr 1fr;
    justify-items: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: 10rem;
    & h1 {
        margin: 0;
    }
`
