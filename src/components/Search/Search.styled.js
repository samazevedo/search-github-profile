import styled from 'styled-components'

export const SearchStyled = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease-in-out;
    margin: 1rem 1rem 1rem 1rem;
    & .search-form {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
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
        padding-left: 3rem;
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
        left: 0rem;
        font-size: ${({ theme }) => theme.fontsize.medium};
        color: ${({ theme }) => theme.colors.boneWhite};
        background-color: #000;
        border-radius: 0.5rem;
        height: 3rem;
        width: 2rem;
    }
    & .requests {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        font-size: ${({ theme }) => theme.fontsize.xlarge};
        align-self: center;
    }
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        & .search-form input {
            font-size: ${({ theme }) => theme.fontsize.small};
        }
        & .search-btn {
            font-size: ${({ theme }) => theme.fontsize.xsmall};
            padding: 0.5rem;
        }
        & .search-form input::placeholder {
            font-size: ${({ theme }) => theme.fontsize.small};
        }
        & .search-icon {
            font-size: ${({ theme }) => theme.fontsize.xsmall};
            height: 3rem;
            width: 1.5rem;
            margin-left: 0.1rem;
        }
        & .requests {
            font-size: ${({ theme }) => theme.fontsize.medium};
        }
    }
`
