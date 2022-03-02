import { useEffect, useState } from 'react'
import { useClient } from 'react-supabase'
import { Link } from 'react-router-dom'
import Card from './atoms/Card'
import Alert from './atoms/Alert'
import CardProject from './atoms/CardProject'

const Projects = () => {
    const supabase = useClient()
    const [projects, setProjects] = useState(null)
    const user = supabase.auth.user()

    useEffect(async () => {
        let { data: project, error } = await supabase
        .from('project')
        .select('*')
        setProjects(project)
    }, [])

    if (!user?.id) return (
        <Card size="md">
            <Alert type="error">Vous devez vous identifier</Alert>
            <Link to="/" className="block w-full text-center rounded py-2 px-3 bg-blue-600 text-white disabled:bg-slate-600">Retour à l'accueil</Link>
        </Card>
    )

    return (
        <div className="container mx-auto my-4 text-slate-700">
            <h1 className="text-3xl mb-4">Liste des projets</h1>
            <ul>
            {projects?.length > 0 && projects.map(project => {
                return (
                    <li key={project.id}>
                        <CardProject name={ project.name } created_at={project.created_at} />
                    </li>
                    )
                })}
            </ul>
            <Link to="/disconnect" className="block w-full text-center rounded py-2 px-3 bg-blue-600 text-white disabled:bg-slate-600">Déconnexion</Link>
        </div>
    )
}

export default Projects