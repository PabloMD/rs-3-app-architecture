import './CardImage.css';

function CardImage({src, alt }){
    if(src){
        return (
            <div>
                <img className="cardImage" src={ src } alt={ alt } />
            </div>
        );
    }else{
        return ('');
    }
}

export default CardImage;