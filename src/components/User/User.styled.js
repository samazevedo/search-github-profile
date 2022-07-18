import styled from 'styled-components'

export const UserStyled = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: 2rem;
    margin-bottom: 1rem;
    & .title {
        position: absolute;
        top: -1rem;
        display: flex;
        flex-direction: column;
        align-self: flex-start;
        padding: 0 0.2rem;
        font-size: ${({ theme }) => theme.fontsize.small};
        color: ${({ theme }) => theme.colors.boneWhite};
        background-color: #000;
        border-radius: 0.2rem;
        border-bottom-left-radius: 0rem;
        border-bottom-right-radius: 0rem;
        margin-bottom: 0;
        align-items: flex-start;
        justify-content: flex-start;
        width: fit-content;
    }
    & .user-card {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    & .user-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 1rem;
    }
    & .user-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding: 1rem;
        width: 100%;
        height: 100%;
        gap: 1rem;
        & .user-name {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            & p {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                width: 100%;
                & svg {
                    margin-right: 0.5rem;
                    color: ${({ theme }) => theme.colors.macawGreen};
                }
            }
        }
        & .user-picture {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 6rem;
            background-color: ${({ theme }) => theme.colors.boneWhite};
            border-radius: 10rem;
            overflow: hidden;
            & img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        & .user-follow-btn {
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            color: ${({ theme }) => theme.colors.bajaBlue};
            background: transparent;
            border: 0.1rem solid ${({ theme }) => theme.colors.bajaBlue};
            border-radius: 1rem;
            transition: all 0.3s ease-in-out;
            cursor: pointer;
            &:hover {
                color: ${({ theme }) => theme.colors.macawGreen};
                border: 0.1rem solid ${({ theme }) => theme.colors.macawGreen};
            }
        }
    }
    & .user-intro {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: flex-start;
        width: 100%;
        margin-left: 1rem;
    }
    & .user-info {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        width: 100%;
        height: 100%;
        & ul {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            width: 100%;
        }
    }
`
