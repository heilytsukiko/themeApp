import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Input = () => {
    const text = useContext(AppContext);

    return (
        <h1>{text?.content}</h1>
    )
}

export default Input;