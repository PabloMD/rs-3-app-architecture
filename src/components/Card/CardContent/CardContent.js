import './CardContent.css';

function CardContent(props){
    const { intro, content, showMore } = props;
    const fullContent = () => {
            return showMore ? (
                <div className="cardFullContent">{content}</div>
            ) : '';
    };

    return (
        <div>
            <div className="cardContentIntro">
                {intro}
            </div>
            {fullContent()}
        </div>
    );
}

export default CardContent;