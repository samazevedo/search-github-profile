import styled from 'styled-components'

export const FollowersStyled = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 1rem;

    & .followers-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-top-left-radius: 0rem;
        &::before {
            content: 'followers';
        }
    }
    & .followers {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 1rem;
        max-height: 20rem;
        overflow-y: scroll;
    }

    & .follower-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 0.3rem;
        width: 100%;
        height: 100%;
        margin-top: 1rem;
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
