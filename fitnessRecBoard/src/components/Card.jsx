import React from "react";



const Card = (props) => {
    return (
        <>
            <div className="Card">
                <h1>{props.eventName}</h1>
                <img src={props.imgLink} alt={props.eventName} />
                <h2>{props.eventDate}</h2>
                <h3>{props.eventTime}</h3>
                <h4>{props.eventDescription}</h4>
                <a href={props.eventLink}><button>More Information</button></a>
            </div>
        </>
    );
}

export default Card;