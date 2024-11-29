import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkAuthState, signInWithEmail } from "../../api/firebase/firebaseUtils";
import NavbarLogo from "../../components/Navbar/NavbarLogo/NavbarLogo";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        const user = await signInWithEmail(email, password);
        if (user) {
            navigate("/procedure/editor");
        }
    };

    checkAuthState((user) => {
        if (user) {
            navigate("/procedure/editor");
        }
    });

    return (
        <div className="h-screen flex justify-center items-center bg-gray-100">
            <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm w-96">
                <div className="p-4 sm:p-7">
                    <div className="text-center">
                        <NavbarLogo />
                        <h1 className="block text-2xl font-bold text-gray-800">Accedi</h1>
                        <p className="mt-2 text-sm text-gray-600">
                            Accedi al tuo account per continuare
                        </p>
                    </div>
                    <div className="mt-5">
                        <form onSubmit={handleLogin}>
                            <div className="grid gap-y-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm mb-2">
                                        Indirizzo email
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            aria-describedby="email-error"
                                        />
                                        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                            <svg
                                                className="size-5 text-red-500"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                                aria-hidden="true"
                                            >
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p
                                        className="hidden text-xs text-red-600 mt-2"
                                        id="email-error"
                                    >
                                        Per favore, inserisci un indirizzo email valido così
                                        possiamo ricontattarti
                                    </p>
                                </div>
                                <div>
                                    <div className="flex justify-between items-center">
                                        <label htmlFor="password" className="block text-sm mb-2">
                                            Password
                                        </label>
                                        <a
                                            className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium"
                                            href="../examples/html/recover-account.html"
                                        >
                                            Password dimenticata?
                                        </a>
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            aria-describedby="password-error"
                                        />
                                        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                            <svg
                                                className="size-5 text-red-500"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                                aria-hidden="true"
                                            >
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p
                                        className="hidden text-xs text-red-600 mt-2"
                                        id="password-error"
                                    >
                                        Sono richiesti almeno 8 caratteri
                                    </p>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                >
                                    Accedi
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;