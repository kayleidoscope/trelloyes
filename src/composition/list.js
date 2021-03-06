import React from 'react';
import AllCards from './AllCards';
import './list.css';

function List(props) {
    return (
        <section className="List" cards={props.cards}>
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                <AllCards 
                    cards={props.cards} 
                    cardInfo={props.cardInfo}
                    onDelete={props.onDelete}
                    listId={props.id}/>
            <button 
                onClick={() => props.onRandom(props.id)}
                type="button">
                    Add random card
            </button>
            </div>
        </section>
    )
}

export default List;



//       <Card
//         title={STORE.allCards[STORE.lists[i].cardIds[j]].title}
//         content={STORE.allCards[STORE.lists[i].cardIds[j]].content}
//         key={`${STORE.lists[i].id}-${STORE.allCards[STORE.lists[i].cardIds[j]].id}`}
//         // id={`${STORE.lists[i].id}-${STORE.allCards[STORE.lists[i].cardIds[j]].id}`}
//       />