import Dashboard from './pages/Dashboard'
import Error from './pages/Error'
import Login from './pages/Login'
import { GlobalStyle } from './shared/Global'
import { ThemeProvider } from 'styled-components'
import { theme } from './shared/theme'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='*' element={<Error />} />
                </Routes>
                <GlobalStyle />
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
