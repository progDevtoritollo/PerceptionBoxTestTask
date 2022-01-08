import React from 'react';
import { Route, Switch } from 'react-router-dom';


import './App.css';
import ListCharacters from './components/ListCharacters/ListCharacters';
import CharacterPage from './components/CharacterPage/CharacterPage';
import NotFound from './components/NotFound/NotFound';
import CharactersListAction from "./actions/characters"
import { Button } from '@mui/material';



function App() {
  function handleClick() {
    console.log("download cliked")
    CharactersListAction.fetchItems()
  }
  return (
    <div className="App">
      <header className="App-header" >
        Rick and Morty actors
        <Button onClick={handleClick}> Download</Button>
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
