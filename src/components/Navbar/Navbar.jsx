import { ButtonStyled } from '../Index'
import { NavbarStyled } from './Navbar.styled'

export const Navbar = () => {
    return (
        <NavbarStyled>
            <div className='img-container'>image</div>
            <h3>Welcome, username</h3>
            <ButtonStyled>logout</ButtonStyled>
        </NavbarStyled>
    )
}
