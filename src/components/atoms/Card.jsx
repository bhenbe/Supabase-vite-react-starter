const Card = (props) => {

    const sizeClassNames = {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl"
    }

    return (
        <div className={"my-8 mx-auto p-4 rounded shadow-lg " + sizeClassNames[props.size]}>
            {props.children}
        </div>
    )
}

Card.defaultProps = {
    size: 'md'
}

export default Card