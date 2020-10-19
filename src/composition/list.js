import React from 'react';
import Card from './card.js';
import './list.css';

function List(props) {
    return (
        <section className="List" cards={props.cards}>
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                <Card 
                    title={props.title} 
                    content={props.content}
                    key={props.key}
                />
            </div>
        </section>
    )
}

export default List;