import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const ColorBlock = () => {
    const appData = useContext(AppContext);

    return (
        <div 
            className="color-block"
            style={{
                width: "100px", 
                height: "100px",
                backgroundColor: appData?.color
            }}
        >
        </div>
    )
}

export default ColorBlock;