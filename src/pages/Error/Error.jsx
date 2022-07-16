import { ContainerStyled } from '../../components/container/Container.styled'
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
                <p>Page Not Found</p>
                <ButtonStyled onClick={handleClick}>Back Home</ButtonStyled>
            </ErrorStyled>
        </ContainerStyled>
    )
}

export default Error
