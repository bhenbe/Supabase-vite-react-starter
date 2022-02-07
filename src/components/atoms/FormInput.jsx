const FormInput = (props) => {

    return (
        <fieldset className="flex flex-col">
            <label htmlFor={props.name}>{props.label}</label>
            <input type={props.type} name={props.name} className="block w-full py-2 px-3 text-gray-700 mb-3 leading-tight rounded border bg-white" value={props.value} onChange={props.onchange} />
        </fieldset>
    )
}

FormInput.defaultProps = {
    type: 'text',
    value: ''
}

export default FormInput