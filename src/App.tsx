import * as React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/mainPage';

export default function App() {
  return (
    <div>
      <Route path="/" exact component={MainPage} />
    </div>
  );
}
