import { useContext } from 'react'
import { GithubContext } from '../../context/context'
import {
    ContainerStyled,
    Info,
    Navbar,
    Search,
    User,
    Followers,
} from '../../components/Index'
import { DashboardStyled } from './Dashboard.styled'

const Dashboard = () => {
    const data = useContext(GithubContext)
    console.log(data)
    return (
        <ContainerStyled>
            <DashboardStyled>
                <Navbar />
                <Search />
                <Info />
                <User />
                <Followers />
            </DashboardStyled>
        </ContainerStyled>
    )
}

export default Dashboard
