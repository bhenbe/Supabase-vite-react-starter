import { useState } from 'react';
import { useSignUp } from 'react-supabase'
//https://react-supabase.vercel.app/documentation/auth/use-signup

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [{ error, fetching, session, user }, signUp] = useSignUp()

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const { error, session, user } = await signUp({
            email: email,
            password: password,
        })
    }

    if (fetching) return (
        <div className="max-w-md my-8 mx-auto p-4 rounded shadow-lg">
            <div className="block w-full py-2 px-3 mb-4 text-blue-700 rounded border border-blue-200 bg-blue-100">Création de compte en cours</div>
        </div>
    )

    if (user) return (
        <div className="max-w-md my-8 mx-auto p-4 rounded shadow-lg">
            <div className="block w-full py-2 px-3 mb-4 text-green-700 rounded border border-green-200 bg-green-100">Votre compte a bien été créé !</div>
        </div>
    )

    return (
        <div className="max-w-md my-8 mx-auto p-4 rounded shadow-lg">
            {!!error  &&
                <div className="block w-full py-2 px-3 mb-4 text-red-700 rounded border border-red-200 bg-red-100">Les informations fournies sont incorrectes</div>
            }
            <form onSubmit={handleSubmit}>
                <fieldset className="flex flex-col">
                    <label htmlFor="login-email">Adresse e-mail</label>
                    <input type="email" name="login-email" className="block w-full py-2 px-3 text-gray-700 mb-3 leading-tight rounded border bg-white" value={email} onChange={(e) => setEmail(e.target.value)} />
                </fieldset>
                <fieldset className="flex flex-col">
                    <label htmlFor="login-password">Mot de passe </label>
                    <input type="password" name="login-password" className="block w-full py-2 px-3 text-gray-700 mb-3 leading-tight rounded border bg-white" value={password} onChange={(e) => setPassword(e.target.value)} />
                </fieldset>
                <button type="submit" className="block w-full rounded py-2 px-3 bg-blue-600 text-white disabled:bg-slate-600" disabled={!validateForm()}>Créer mon compte</button>
            </form>
        </div>
    )
}

export default LoginForm