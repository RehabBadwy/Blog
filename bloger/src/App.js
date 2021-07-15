
import TobBar from "./Component/TobBar/TopBar";
import Login from "./Pag/Login/Login";
import Register from "./Pag/Register/Register";
import Settings from "./Pag/Settingss/Settings";
import Home from "./Pag/Homee/Home";
import Write from "./Pag/Write/Write";
import Single from "./Pag/Single/Single";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  const user = true

  return (
    <Router>
    <TobBar />
    <Switch>
    <Route exact path="/">
          <Home />
        </Route>

        <Route path="/register">
           {user ? <Register/> : <Login/>}
        </Route>

        <Route path="/Login">
        {user ? <Login/> : <Register/>}
        </Route>

        <Route path="/write">
        {user ? <Write/> : <Home/>}
        </Route>

        <Route path="/Settings">
        {user ? <Settings/> : <Register/>}
        </Route>
        
       
        
        <Route path="/Postt/:PosttId">
          <Single />
        </Route>

    </Switch>
   
    </Router>
  );
}

export default App;
