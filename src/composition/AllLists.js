import React from 'react';
import List from './list';
import './list.css';
import '../app.css';

function AllLists(props) {
    return (
         <section className="List App-list">
            {props.lists.map((_, i) =>
                <List 
                    header={props.lists[i].header} 
                    cards={props.lists[i].cardIds}
                    cardInfo={props.allCards}
                    onDelete={props.onDelete}
                    onRandom={props.onRandom}
                    id={props.lists[i].id}
                    key={props.lists[i].id}>
                </List>
            )}
        </section>
    )
}

export default AllLists;