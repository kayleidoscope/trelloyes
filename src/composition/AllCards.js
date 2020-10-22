import React from 'react';
import Card from './card';
import './list.css';

function AllCards(props) {
    return (
         <section className="List">
            {props.cards.map((_, i) => 
                <Card
                    title={props.cardInfo[props.cards[i]].title}
                    content={props.cardInfo[props.cards[i]].content}
                    key={props.cardInfo[props.cards[i]].key}
                />
            )}
        </section>
    )
}

export default AllCards;