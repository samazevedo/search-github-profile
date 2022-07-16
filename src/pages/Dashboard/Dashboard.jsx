import { useContext } from 'react'
import { GithubContext } from '../../context/context'
import { ContainerStyled, Info, Navbar, Search } from '../../components/Index'
import { DashboardStyled } from './Dashboard.styled'

const Dashboard = () => {
    const data = useContext(GithubContext)
    console.log(data)
    return (
        <ContainerStyled>
            <DashboardStyled>
                <Navbar />
                <div className='dashboard-container'>
                    <Search />
                    <Info />
                </div>
            </DashboardStyled>
        </ContainerStyled>
    )
}

export default Dashboard
