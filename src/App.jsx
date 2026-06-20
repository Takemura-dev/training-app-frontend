import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* ログイン画面 */}
                <Route path="/login" element={<LoginPage />} />

                {/* トップページはログインにリダイレクト */}
                <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App