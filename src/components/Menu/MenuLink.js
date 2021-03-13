import { ColorPaletteMap } from "../Layout";

const baseStyles = {
    display: 'block',
    padding: '0.5em 1em',
    color: ColorPaletteMap.asbestos,
    textDecoration: 'none'
};

function MenuLink({ children, isActive, to }){
    const styles = {...baseStyles};

    if(isActive){
        styles['color'] = ColorPaletteMap.pomegranate;
    }

    return(
        <a style={styles} href={to}>{ children }</a>
        );
}

export default MenuLink;