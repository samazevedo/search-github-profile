import { Dashboard, Login, Error } from './pages/Index'
import { GlobalStyle } from './shared/Global'
import { ThemeProvider } from 'styled-components'
import { theme } from './shared/theme'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
