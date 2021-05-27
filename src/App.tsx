import React from 'react';
import {Switch, Route} from "react-router-dom";

function App() {
  return (
      <Switch>
         <Route exact path="/">
            <div className="App">
               Pokemon - CPSC455 Project
            </div>
         </Route>
      </Switch>

  );
}

export default App;
