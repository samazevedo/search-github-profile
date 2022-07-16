import { useContext } from 'react'
import { ContainerStyled } from '../../components/Container/Container.styled'
import { GithubContext } from '../../context/context'

const Dashboard = () => {
    const data = useContext(GithubContext)
    console.log(data)
    return (
        <ContainerStyled>
            <h1>Dashboard</h1>
        </ContainerStyled>
    )
}

export default Dashboard
