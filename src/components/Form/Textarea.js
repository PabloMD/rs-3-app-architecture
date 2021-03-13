import { ColorPaletteMap } from "../Layout";


function Textarea({ label, bgColor = "nephritis", color = "wisteria", borderSize, borderRadius, borderColor}){
    const styles = {
        backgroundColor: ColorPaletteMap[bgColor],
        color: ColorPaletteMap[color],
        borderWidth: borderSize,
        borderRadius: parseInt(borderRadius),
        borderColor: ColorPaletteMap[borderColor]
    };

    return(
        <textarea style={styles}></textarea>
    );
}

export default Textarea;