import { useClient, useSignOut } from 'react-supabase'
import { Link } from "react-router-dom";

const LogOut = () => {
    const supabase = useClient()
    const [{ error, fetching }, signOut] = useSignOut()
    const user = supabase.auth.user()

    async function onClickSignOut() {
        const { error } = await signOut()
    }

    if (fetching) return (
        <div className="max-w-md my-8 mx-auto p-4 rounded shadow-lg">
            <div className="block w-full py-2 px-3 mb-4 text-blue-700 rounded border border-blue-200 bg-blue-100">Déconnexion en cours</div>
        </div>
    )

    if (fetching) return (
        <div className="max-w-md my-8 mx-auto p-4 rounded shadow-lg">
            <div className="block w-full py-2 px-3 mb-4 text-red-700 rounded border border-red-200 bg-red-100">Une erreur est survenue</div>
        </div>
    )

    if (user && user.id !== 0) return (
        <div className="max-w-md my-8 mx-auto p-4 rounded shadow-lg">
            <button className="block w-full text-center rounded py-2 px-3 bg-blue-600 text-white disabled:bg-slate-600" onClick={() => onClickSignOut()}>Déconnexion</button> 
        </div>
    )

    return (
        <div className="max-w-md my-8 mx-auto p-4 rounded shadow-lg">
            <div className="block w-full py-2 px-3 mb-4 text-green-700 rounded border border-green-200 bg-green-100">Vous êtes déconnecté !</div>
            <Link to="/" className="block w-full text-center rounded py-2 px-3 bg-blue-600 text-white disabled:bg-slate-600">Retour à l'accueil</Link> 
        </div>
    )
}

export default LogOut