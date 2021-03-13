import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ColorPaletteMap } from "../Layout";

import './Form.css';

const fontAwesomeMap = {
    user: "user"
};

function Button({ label, bgColor = "silver", color = "wet asphalt", icon }){
    const styles = {
        backgroundColor: ColorPaletteMap[bgColor],
        color: ColorPaletteMap[color],
    };

    const fontAwesomeIcon = () => {
        return fontAwesomeMap[icon] ? <FontAwesomeIcon icon={fontAwesomeMap[icon]} /> : '';
    };

    return(
        <button style={styles}>
            {fontAwesomeIcon()} { label }
        </button>
    );
}

export default Button;