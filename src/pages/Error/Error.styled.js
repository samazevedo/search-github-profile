import styled from 'styled-components'

export const ErrorStyled = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 1.5fr;
    align-items: start;
    justify-items: center;
    font-size: ${({ theme }) => theme.fontsize.xxlarge};
`
