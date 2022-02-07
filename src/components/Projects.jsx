import { useEffect, useState } from 'react'
import { useClient } from 'react-supabase'
import moment from 'moment'
import { Link } from 'react-router-dom'
import Alert from './atoms/Alert'

const Projects = () => {
    const supabase = useClient()
    const [projects, setProjects] = useState(null)
    const user = supabase.auth.user()

    console.log(user)

    useEffect(async () => {
        let { data: project, error } = await supabase
        .from('project')
        .select('*')
        setProjects(project)
    }, [])

    if (!!!user?.id) return (
        <div className="max-w-md my-8 mx-auto p-4 rounded shadow-lg">
            <Alert type="error">Vous devez vous identifier</Alert>
            <Link to="/" className="block w-full text-center rounded py-2 px-3 bg-blue-600 text-white disabled:bg-slate-600">Retour à l'accueil</Link>
        </div>
    )

    return (
        <div className="container mx-auto my-4 text-slate-700">
            <h1 className="text-3xl mb-4">Liste des projets</h1>
            <ul>
            {projects?.length > 0 && projects.map(project => {
                return (
                    <li key={project.id} className="p-4 mb-2 flex flex-col border rounded shadow">
                        <strong className="text-blue-600 font-light text-lg">{ project.name }</strong>
                        <span className="text-sm text-slate-500">{ moment(project.created_at).format('DD/MM/YYYY h:mm:ss') }</span>
                    </li>
                    )
                })}
            </ul>
            <Link to="/disconnect" className="block w-full text-center rounded py-2 px-3 bg-blue-600 text-white disabled:bg-slate-600">Déconnexion</Link>
        </div>
    )
}

export default Projects