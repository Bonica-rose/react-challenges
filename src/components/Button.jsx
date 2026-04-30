const Button = ({ type, buttonFor, token, activeToken, setActiveToken }) => {

    const isActive = activeToken === token

    const handleClick = () => {
        if (setActiveToken && token) {
            setActiveToken(token)
        }
    }

    let anotherTrenary = `${isActive ? "bg-green-500 hover:bg-green-600" : "bg-gray-400 text-gray-900 hover:bg-gray-500"}`;
    
    return (
        <button
            type={type}
            onClick={handleClick}
            className={`px-4 py-2 rounded text-white transition  
                ${type==='submit'? "bg-sky-600 hover:bg-sky-700": anotherTrenary }
            `}
        >
            {buttonFor}
        </button>
    )
}

export default Button