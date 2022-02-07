import moment from 'moment'

const CardProject = (props) => {

    return (
        <div className="p-4 mb-3 flex flex-col border rounded shadow">
            <strong className="text-blue-600 font-light text-lg">{ props.name }</strong>
            <span className="text-sm text-slate-500">{ moment(props.created_at).format('DD/MM/YYYY h:mm:ss') }</span>
        </div>
    )
}

export default CardProject