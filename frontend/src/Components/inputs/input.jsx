import "./input.css"

export const Input = ({ type, placeholder, id }) => {
    return (
        <>
            <input id={id} className="input" type={type} placeholder={placeholder} />
        </>
    )
}
