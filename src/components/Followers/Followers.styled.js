import styled from 'styled-components'

export const FollowersStyled = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
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
    & .followers {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 1rem;
    }
    & .follower-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 0.3rem;
        width: 100%;
        height: 100%;
    }
    & .follower-picture {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3rem;
        height: 3rem;
        background-color: ${({ theme }) => theme.colors.boneWhite};
        border-radius: 4rem;
        overflow: hidden;
        margin-right: 2rem;
    }
    & .follower-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        width: 100%;
        font-size: ${({ theme }) => theme.fontsize.small};
    }
`
