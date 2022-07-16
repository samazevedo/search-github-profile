import styled from 'styled-components'

export const SearchStyled = styled.section`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1.5fr 0.5fr;
    grid-template-rows: 1fr;
    align-items: center;
    justify-items: center;
    & .search-form {
        position: relative;
        display: grid;
        align-items: center;
        width: 100%;
    }
    & .search-form button {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        font-size: ${({ theme }) => theme.fontsize.small};
    }
    & .search-form input {
        width: 100%;
        height: 3rem;
        padding-left: 1rem;
        border: none;
        border-radius: 0.5rem;
        background-color: #000;
        font-size: ${({ theme }) => theme.fontsize.large};
        color: ${({ theme }) => theme.colors.boneWhite};
    }
    & .search-form input::placeholder {
        color: ${({ theme }) => theme.colors.boneWhite};
        font-size: ${({ theme }) => theme.fontsize.large};
    }
    & .search-form input:focus {
        outline: none;
    }
    & .search-icon {
        position: absolute;
        top: 0;
        left: -1.3rem;
        font-size: ${({ theme }) => theme.fontsize.large};
        color: ${({ theme }) => theme.colors.boneWhite};
        background-color: #000;
        border-radius: 0.5rem;
        height: 3rem;
        width: 2rem;
    }
    & .requests {
        font-size: ${({ theme }) => theme.fontsize.xlarge};
    }
`
