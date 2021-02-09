import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { TravelOverview } from './components/TravelOverview'
import TravelProvider from './context/GlobalState';


function App() {
  return (
    <div className="App">
      <TravelProvider>    
        <TravelOverview />
      </TravelProvider>   
    </div>
  );
}

export default App;
