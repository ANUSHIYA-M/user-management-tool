import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserListPage from "pages/UserList";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={UserListPage}></Route>
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
