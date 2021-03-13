
import { CardTitle, CardImage, CardContent } from './';
import './Card.css';


function Card(props){
    const { title, imageSrc } = props;
    return(
        <div className="card">
         <CardTitle title={title} />
         <CardImage src={imageSrc} alt={title} />
         <CardContent { ...props } />
        </div>
    );
}

export default Card;