import { useEffect, useState } from 'react';
import { useClient } from 'react-supabase'
import moment from 'moment'

const Projects = () => {
    const supabase = useClient()
    const [projects, setProjects] = useState(null)

    useEffect(async () => {
        let { data: project, error } = await supabase
        .from('project')
        .select('*')
        setProjects(project)
    }, [])

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
        </div>
    )
}

export default Projects