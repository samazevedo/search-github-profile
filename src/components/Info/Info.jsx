import { CardStyled } from '../Index'
import { InfoStyled, InfoContent } from './Info.styled'
import { useGithubContext } from '../../context/context'
import { FiBook, FiUser, FiUserPlus, FiFile } from 'react-icons/fi'

export const Info = () => {
    const { githubUser } = useGithubContext()

    const { public_repos, public_gists, followers, following } = githubUser

    const items = [
        {
            id: 1,
            icon: <FiBook />,
            title: 'Repos',
            value: public_repos,
            color: 'red',
        },
        {
            id: 2,
            icon: <FiUser />,
            title: 'Followers',
            value: followers,
            color: 'blue',
        },
        {
            id: 3,
            icon: <FiUserPlus />,
            title: 'Following',
            value: following,
            color: 'green',
        },
        {
            id: 4,
            icon: <FiFile />,
            title: 'Gists',
            value: public_gists,
            color: 'yellow',
        },
    ]

    return (
        <InfoStyled>
            {items.map((item) => {
                const { id, icon, title, value, color } = item

                return (
                    <CardStyled className='info-card' key={id}>
                        <InfoContent>
                            <div className={`info-image ${color}`}>{icon}</div>
                            <div className='info-info'>
                                <h3>{title}</h3>
                                <p>{value}</p>
                            </div>
                        </InfoContent>
                    </CardStyled>
                )
            })}
        </InfoStyled>
    )
}
