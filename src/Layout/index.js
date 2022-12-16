import React, { useEffect , useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Common/Header";
import Home from "./Common/Home";
import NewDeck from "./Decks/CreateDeck";
import EditDeck from "./Decks/EditDeck";
import StudyDeck from "./Decks/StudyDeck";
import Deck from "./Decks/Deck";
import EditCard from "./Cards/EditCard";
import NewCard from "./Cards/CreateCard.js";
import StudyCard from "./Decks/StudyCard";
import NotFound from "./NotFound";
import { listDecks } from "../utils/api";

function Layout() {

 const [decks, setDecks] = useState([]);

 useEffect(() => {

  setDecks([]);
  
  const abortController = new AbortController();

  async function loadDecks() {
    try {
      const loadedDecks = await listDecks();
      setDecks(loadedDecks);
    } catch (error) {
      if (error.name !== "AbortError") {
        throw error;
      }
    }
  }
  loadDecks();
  return() => abortController.abort();
 }, []);
  
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
        <Route exact path="/">
            <Home decks={decks}/>
          </Route>
          <Route path={"/decks/new"}>
            <NewDeck />
          </Route>
          <Route path={"/decks/:deckId/cards/:cardId/edit"}>
            <EditCard />
          </Route>
          <Route path={"/decks/:deckId/cards/:cardId/study"}>
            <StudyCard/>
          </Route>
          <Route path={"/decks/:deckId/cards/new"}>
            <NewCard />
          </Route>
          <Route path={"/decks/:deckId/edit"}>
            <EditDeck />
          </Route>
          <Route path={"/decks/:deckId/study"}>
            <StudyDeck />
          </Route>
          <Route exact path={"/decks/:deckId"}>
            <Deck />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
