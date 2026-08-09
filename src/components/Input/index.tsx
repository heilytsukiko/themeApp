import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Input = () => {
    const context = useContext(AppContext);

    if (!context) return null;
    const { value, setValue } = context;

    function setText(event: React.ChangeEvent<HTMLInputElement>) {
        const newValue = event.target.value.toUpperCase();
        setValue((prev) => ({...prev, color: newValue}));
    }

    return (
        <>
            <h1>{value?.content}</h1>
            <input type="text" value={value.color} onChange={setText}/>
        </>
    )
}

export default Input;