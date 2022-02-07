import { useClient, useSignOut } from 'react-supabase'
import { Link } from 'react-router-dom'
import Alert from './atoms/Alert'

const LogOut = () => {
    const supabase = useClient()
    const [{ error, fetching }, signOut] = useSignOut()
    const user = supabase.auth.user()

    async function onClickSignOut() {
        const { error } = await signOut()
    }

    if (fetching) return (
        <div className="max-w-md my-8 mx-auto p-4 rounded shadow-lg">
            <Alert type="info">Déconnexion en cours</Alert>
        </div>
    )

    if (fetching) return (
        <div className="max-w-md my-8 mx-auto p-4 rounded shadow-lg">
            <Alert type="error">Une erreur est survenue</Alert>
        </div>
    )

    if (user && user.id !== 0) return (
        <div className="max-w-md my-8 mx-auto p-4 rounded shadow-lg">
            <button className="block w-full text-center rounded py-2 px-3 bg-blue-600 text-white disabled:bg-slate-600" onClick={() => onClickSignOut()}>Déconnexion</button> 
        </div>
    )

    return (
        <div className="max-w-md my-8 mx-auto p-4 rounded shadow-lg">
            <Alert type="success">Vous êtes déconnecté !</Alert>
            <Link to="/" className="block w-full text-center rounded py-2 px-3 bg-blue-600 text-white disabled:bg-slate-600">Retour à l'accueil</Link> 
        </div>
    )
}

export default LogOut