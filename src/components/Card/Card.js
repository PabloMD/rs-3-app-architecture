
import { CardTitle, CardImage, CardContent } from './';
import './Card.css';


function Card(props){
    const { title, imageSrc, intro, content, showMore } = props;
    return(
        <div className="card">
         <CardTitle title={title} />
         <CardImage src={imageSrc} alt={title} />
         <CardContent { ...{ intro, content, showMore } } />
        </div>
    );
}

export default Card;