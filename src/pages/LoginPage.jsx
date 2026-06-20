import { useState} from "react";
import { useNavigate, Link} from "react-router-dom";
import client from "../api/client.js";

function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const  handleLogin = async (e) => {
        e.preventDefault();
        setError('')

        try {
            const response = await client.post('/api/auth/login', {
                email,
                password,
            })

            localStorage.setItem('token', response.data.token)

            navigate('/records')
        } catch (err) {
            setError('メールアドレスまたはパスワードが正しくありません')
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 flex item-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">

                <h1 className="text-2xl font-bold text-center mb-6">
                    ログイン
                </h1>
                {error &&(
                    <p className="text-red-500 text-sm mb-4">{error}</p>
                )}

                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">
                            メールアドレス
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-1">
                            パスワード
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                        >
                        ログイン
                    </button>
                </form>
                <p className="text-center text-sm mt-4">
                    アカウントをお持ちでない方は
                    <Link to="/register" className="text-blue-500 hover:underline ml-1">
                        新規登録
                    </Link>
                </p>
            </div>
        </div>
    )
}
export default LoginPage;