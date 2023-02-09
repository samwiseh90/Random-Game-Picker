import React from 'react';
import { GameListPage } from './features/games/GameListPage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useFormikContext } from 'formik';

export default function App() {
  return (
    <>
      <GameListPage/>
    </>
  );
}