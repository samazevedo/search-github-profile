import { FollowersStyled } from './Followers.styled'
import { CardStyled } from '../Index'
import { useGithubContext } from '../../context/context'

export const Followers = () => {
    const { githubFollowers } = useGithubContext()
    return (
        <FollowersStyled>
            <div className='title'>Followers</div>
            <CardStyled>
                <article className='followers'>
                    {githubFollowers.map((follower, index) => {
                        const { avatar_url, name, github_url } = follower
                        return (
                            <div key={index} className='follower-item'>
                                <div className='follower-picture'>
                                    <img src={avatar_url} alt='user' />
                                </div>
                                <div className='follower-info'>
                                    <h5>{name}</h5>
                                    <p>{github_url}</p>
                                </div>
                            </div>
                        )
                    })}
                </article>
            </CardStyled>
        </FollowersStyled>
    )
}
