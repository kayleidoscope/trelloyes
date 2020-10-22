import React from 'react';
import Card from './card';
import './list.css';

function AllCards(props) {
    return (
         <section className="List">
            {props.cards.map((_, i) => 
                <Card
                    title={props.cardInfo[props.cards[i]].title}
                    listId={props.listId}
                    cardId={props.cardInfo[props.cards[i]].id}
                    content={props.cardInfo[props.cards[i]].content}
                    key={`${props.listId}-${props.cardInfo[props.cards[i]].id}`}
                    onDelete={props.onDelete}
                />
            )}
        </section>
    )
}

export default AllCards;