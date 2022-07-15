import { ContainerStyled } from '../../components/container/Container.styled'
import { ErrorStyled } from './Error.styled'

const Error = () => {
    return (
        <ContainerStyled>
            <ErrorStyled>
                <h1>404</h1>
                <p>Page Not Found</p>
            </ErrorStyled>
        </ContainerStyled>
    )
}

export default Error
