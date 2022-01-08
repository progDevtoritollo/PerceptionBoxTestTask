import React from 'react';
import { Route, Switch } from 'react-router-dom';


import './App.css';
import ListCharacters from './components/ListCharacters/ListCharacters';
import CharacterPage from './components/CharacterPage/CharacterPage';
import NotFound from './components/NotFound/NotFound';
import characters from './services/charactersService';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Rick and Morty actors
      </header>
      <div className="content">
        <Switch>
          <Route path="/" exact component={() => <ListCharacters />} />
          <Route path="/character/:id" exact component={() => <CharacterPage />} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
