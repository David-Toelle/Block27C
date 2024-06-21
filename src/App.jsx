//DONE
// Import the React library, which allows us to define components
// Import the Players component, which we'll use to show a list of players
import {Players} from './features/players/players';
// eslint-disable-next-line no-unused-vars
import React from 'react';

// Define the App component
export default function App() {
  // This component renders the Players component inside a div
  // This div has a class of 'App', which we could use for styling
  return (
    <div className='App'>
      <div className="header">
        <h1>
          Welcome to the Puppy Bowl Event
        </h1>
        <h4>Come and join us for a fun-filled day of adorable puppy football!</h4>
        <h4>Get ready to meet the tanlented pups competing in this year/s Puppy Bowl... and here they are:</h4>
      </div>
      <Players/>
    </div>
  );
}

// Export the App component as the default export