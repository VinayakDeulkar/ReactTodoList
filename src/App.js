import "./App.css"
import { BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Homepage from "./Component/Homepage";


function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route path="/Register" exact component={Register}/>
          <Route path="/" exact component={Login}/>
          <Route path="/Homepage" exact component={Homepage}/>
          <Redirect to="/"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
