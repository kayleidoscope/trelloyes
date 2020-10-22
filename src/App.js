import React from 'react';
// import Card from './composition/card.js';
import AllLists from './composition/AllLists';
import './app.css';
// import Card from './composition/card.js';


class App extends React.Component {
  state = {
    lists: [
      {
        id: '1',
        header: 'First list',
        cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
      },
      {
        id: '2',
        header: 'Second list',
        cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
      },
      {
        id: '3',
        header: 'Third list',
        cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
      },
      {
        id: '4',
        header: 'Fourth list',
        cardIds: [ 'l', 'm' ],
      },
    ],
    allCards: {
      'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
      'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
      'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
      'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
      'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
      'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
      'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
      'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
      'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
      'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
      'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
      'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
      'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
    }
  }

// let lists = STORE.lists.map((_, i) =>

//     {STORE.lists[i].cardIds.map((_, j) =>
//       <Card
//         title={STORE.allCards[STORE.lists[i].cardIds[j]].title}
//         content={STORE.allCards[STORE.lists[i].cardIds[j]].content}
//         key={`${STORE.lists[i].id}-${STORE.allCards[STORE.lists[i].cardIds[j]].id}`}
//         // id={`${STORE.lists[i].id}-${STORE.allCards[STORE.lists[i].cardIds[j]].id}`}
//       />
//     )}
  
// )

  render() {
    return (
      <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        <AllLists lists={this.state.lists} allCards={this.state.allCards}/>
      </div>
    </main>
    );
  }
}

export default App;