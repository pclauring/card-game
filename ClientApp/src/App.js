import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import CardGamePage from './components/game/CardGamePage';
import DeckBuilderPage from './components/deck-builder/DeckBuilderPage';

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/card-game' component={CardGamePage} />
    <Route path='/deck-builder' component={DeckBuilderPage} />
  </Layout>
);
