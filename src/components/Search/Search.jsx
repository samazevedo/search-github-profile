import { SearchStyled } from './Search.styled'
import { ButtonStyled } from '../Index'
import { FiSearch } from 'react-icons/fi'
export const Search = () => {
    return (
        <SearchStyled>
            <form className='search-form'>
                <input type='text' placeholder='Search' />
                <FiSearch className='search-icon' />
                <ButtonStyled type='submit'>Search</ButtonStyled>
            </form>
            <div className='requests'>
                <span>Requests:</span> <span>47/60</span>{' '}
            </div>
        </SearchStyled>
    )
}
