import "./input.css"

export const Input = ({ type, placeholder }) => {
    return (
        <>
            <input className="input" type={type} placeholder={placeholder} />
        </>
    )
}
