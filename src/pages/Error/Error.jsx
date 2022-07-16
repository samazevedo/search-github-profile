import { ContainerStyled } from '../../components/Container/Container.styled'
import { ButtonStyled } from '../../components/Button/Button.styled'
import { ErrorStyled } from './Error.styled'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

    return (
        <ContainerStyled>
            <ErrorStyled>
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <ButtonStyled onClick={handleClick}>Back Home</ButtonStyled>
            </ErrorStyled>
        </ContainerStyled>
    )
}

export default Error
