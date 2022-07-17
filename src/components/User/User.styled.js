import styled from 'styled-components'

export const UserStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-top: 1rem;
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
        padding: 1rem;
        width: 100%;
        height: 100%;
        gap: 1rem;
        & .user-name {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
        & .user-picture {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 7rem;
            height: 7rem;
            background-color: ${({ theme }) => theme.colors.boneWhite};
            border-radius: 7rem;
            overflow: hidden;
        }
        & .user-follow-btn {
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            color: ${({ theme }) => theme.colors.scubaBlue};
            background: transparent;
            border: 0.1rem solid ${({ theme }) => theme.colors.scubaBlue};
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
