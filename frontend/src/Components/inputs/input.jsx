import "./input.css"

export const Input = ({ id, type = "text", placeholder = "", value, onChange, className = "" }) => {
    return (
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={className}
        />
    );
};
