import { ContainerStyled, ButtonStyled } from '../../components/Index'
import { LoginStyled, ImageContainer } from './Login.styled'
import img from '../../images/login.jpg'
const Login = () => {
    return (
        <ContainerStyled>
            <LoginStyled>
                <ImageContainer img={img} alt='login-img'></ImageContainer>
                <h1>Github User</h1>
                <ButtonStyled>Login</ButtonStyled>
            </LoginStyled>
        </ContainerStyled>
    )
}

export default Login
