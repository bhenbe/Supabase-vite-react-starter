import { useState }  from 'react';
import { useSignUp } from 'react-supabase'
//https://react-supabase.vercel.app/documentation/auth/use-signup
import Card          from './atoms/Card'
import Alert         from './atoms/Alert'
import FormInput     from './atoms/FormInput'

const RegisterForm = () => {
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
            {!error  &&
                <Alert type="error">Les informations fournies sont incorrectes</Alert>
            }
            <form onSubmit={handleSubmit}>
                <FormInput 
                    name="register-email"
                    label="Adresse e-mail"
                    type="email"
                    value={email} 
                    onchange={(e) => setEmail(e.target.value)} />
                <FormInput
                    name="register-password"
                    label="Mot de passe"
                    type="password" 
                    value={password} 
                    onchange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="block w-full text-center rounded py-2 px-3 bg-blue-600 text-white disabled:bg-slate-600" disabled={!validateForm()}>Créer mon compte</button>
            </form>
        </Card>
    )
}

export default RegisterForm