import { ColorPaletteMap } from '../Layout';

function Input({
    bgColor = 'nephritis',
    color = 'wisteria',
    borderSize,
    borderRadius,
    borderColor,
}) {
    const styles = {
        backgroundColor: ColorPaletteMap[bgColor],
        color: ColorPaletteMap[color],
        borderWidth: borderSize,
        borderRadius: parseInt(borderRadius),
        borderColor: ColorPaletteMap[borderColor],
    };

    return <input style={styles} />;
}

export default Input;
