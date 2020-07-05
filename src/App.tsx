import * as React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';

export default function App() {
  return (
    <div>
      <Route path="/" exact component={MainPage} />
    </div>
  );
}
