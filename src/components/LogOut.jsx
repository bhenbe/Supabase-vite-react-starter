import { useClient, useSignOut } from 'react-supabase'
import { Navigate } from 'react-router-dom'
import Card from './atoms/Card'
import Alert from './atoms/Alert'

const LogOut = () => {
    const supabase = useClient()
    const [{ error, fetching }, signOut] = useSignOut()
    const user = supabase.auth.user()

    async function onClickSignOut() {
        const { error } = await signOut()
    }

    if (fetching) return (
        <Card size="md">
            <Alert type="info">Déconnexion en cours</Alert>
        </Card>
    )

    if (error) return (
        <Card size="md">
            <Alert type="error">Une erreur est survenue</Alert>
        </Card>
    )

    if (user && user.id !== 0) return (
        <Card size="md">
            <button className="block w-full text-center rounded py-2 px-3 bg-blue-600 text-white disabled:bg-slate-600" onClick={() => onClickSignOut()}>Déconnexion</button> 
        </Card>
    )

    return (
        <Card size="md">
            <Alert type="success">Vous êtes déconnecté !</Alert>
            <Navigate to="/" /> 
        </Card>
    )
}

export default LogOut