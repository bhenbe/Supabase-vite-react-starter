import { useState } from 'react'
import { useSignIn } from 'react-supabase'
//https://react-supabase.vercel.app/documentation/auth/use-signin
import { Link } from 'react-router-dom'
import Card from './atoms/Card'
import Alert from './atoms/Alert'

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [{ error, fetching, session, user }, signIn] = useSignIn()

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const { error, session, user } = await signIn({
            email: email,
            password: password,
        })
    }

    if (fetching) return (
        <Card size="md">
            <Alert type="info">Connexion en cours</Alert>
        </Card>
    )

    if (user) return (
        <Card size="md">
            <Alert type="success">Connecté !</Alert>
            <Link to="projects" className="block w-full rounded py-2 px-3 bg-blue-600 text-white disabled:bg-slate-600">Afficher les projets</Link>
        </Card>
    )

    return (
        <Card size="md">
            {!!error  &&
                <Alert type="error">Les informations fournies sont incorrectes</Alert>
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
                <button type="submit" className="block w-full text-center rounded py-2 px-3 bg-blue-600 text-white disabled:bg-slate-600" disabled={!validateForm()}>M'identifier</button>
            </form>
        </Card>
    )
}

export default LoginForm