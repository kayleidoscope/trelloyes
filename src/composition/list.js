import React from 'react';
import './list.css';

function List(props) {
    console.log(props)
    return (
        <section className="List" cards={props.cards} key={props.id}>
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {props.children}
            </div>
        </section>
    )
}

export default List;