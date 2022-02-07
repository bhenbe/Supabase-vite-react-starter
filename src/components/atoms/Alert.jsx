const Alert = (props) => {

    const typeClassNames = {
        info: "text-blue-700 border-blue-200 bg-blue-100",
        success: "text-green-700 border-green-200 bg-green-100",
        warning: "text-orange-700 border-orange-200 bg-orange-100",
        error: "text-red-700 border-red-200 bg-red-100"
    }

    return (
        <div className={"block w-full py-2 px-3 mb-4 rounded border " + typeClassNames[props.type]}>
            {props.children}
        </div>
    )
}

Alert.defaultProps = {
    type: 'info'
}

export default Alert