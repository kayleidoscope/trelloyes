import React from 'react';
import List from './list';
import './list.css';

function AllLists(props) {
    return (
         <section className="List">
            {props.lists.map((_, i) =>
                <List 
                    header={props.lists[i].header} 
                    cards={props.lists[i].cardIds}
                    cardInfo={props.allCards}
                    key={props.lists[i].id}>
                </List>
            )}
        </section>
    )
}

export default AllLists;