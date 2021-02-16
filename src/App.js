import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./LoginPage";

import SignUpPage from "./SignUpPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignUpPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
