import React from 'react';
import { GameListItem } from './features/games/GameListItem';
import { GameListPage } from './features/games/GameListPage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'

export default function App() {
  return (
    <>
      <GameListPage/>
    </>
  );
}