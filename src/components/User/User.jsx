import { UserStyled } from './User.styled'
import { CardStyled } from '../Card/Card.styled'
import { useGithubContext } from '../../context/context'
import { FiTwitter, FiLink2, FiMapPin, FiBriefcase } from 'react-icons/fi'

export const User = () => {
    const { githubUser } = useGithubContext()

    console.log(githubUser)

    const { avatar_url, name, twitter_username, bio, company, location, blog } =
        githubUser
    return (
        <UserStyled>
            <div className='title'>User</div>
            <CardStyled className='user-card'>
                <header className='user-header'>
                    <div className='user-picture'>
                        <img src={avatar_url} alt='user' />
                    </div>
                    <div className='user-name'>
                        <div>
                            <h4>{name}</h4>
                            <p>
                                <FiTwitter /> @{twitter_username}
                            </p>
                        </div>
                        <button className='user-follow-btn'>Follow</button>
                    </div>
                </header>
                <div className='user-body'>
                    <article className='user-intro'>
                        <p>{bio}</p>
                    </article>
                    <article className='user-info'>
                        <ul>
                            <li>
                                <FiBriefcase /> {company ? company : 'company'}
                            </li>
                            <li>
                                <FiMapPin /> {location}
                            </li>
                            <li>
                                <FiLink2 /> {blog}
                            </li>
                        </ul>
                    </article>
                </div>
            </CardStyled>
        </UserStyled>
    )
}
