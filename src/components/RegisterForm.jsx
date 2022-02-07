import { useState } from 'react';
import { useSignUp } from 'react-supabase'
//https://react-supabase.vercel.app/documentation/auth/use-signup
import Card from './atoms/Card'
import Alert from './atoms/Alert'

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
        <Card size="md">
            <Alert type="info">Création de compte en cours</Alert>
        </Card>
    )

    if (user) return (
        <Card size="md">
            <Alert type="success">Votre compte a bien été créé !</Alert>
        </Card>
    )

    return (
        <Card size="md">
            {!!error  &&
                <Alert type="error">Les informations fournies sont incorrectes</Alert>
            }
            <form onSubmit={handleSubmit}>
                <fieldset className="flex flex-col">
                    <label htmlFor="register-email">Adresse e-mail</label>
                    <input type="email" name="register-email" className="block w-full py-2 px-3 text-gray-700 mb-3 leading-tight rounded border bg-white" autoComplete="false" value={email} onChange={(e) => setEmail(e.target.value)} />
                </fieldset>
                <fieldset className="flex flex-col">
                    <label htmlFor="register-password">Mot de passe </label>
                    <input type="password" name="register-password" className="block w-full py-2 px-3 text-gray-700 mb-3 leading-tight rounded border bg-white" autoComplete="false" value={password} onChange={(e) => setPassword(e.target.value)} />
                </fieldset>
                <button type="submit" className="block w-full text-center rounded py-2 px-3 bg-blue-600 text-white disabled:bg-slate-600" disabled={!validateForm()}>Créer mon compte</button>
            </form>
        </Card>
    )
}

export default LoginForm