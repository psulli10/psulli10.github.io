const Card = ({cardInfo}) => {

    const cardNode = () => {
        return cardInfo.text ? <p>{cardInfo.text}</p> : <img src={cardInfo.url}></img>
    }

    return (
        <>
        {cardNode()}
        </>
    )
}

export default Card;