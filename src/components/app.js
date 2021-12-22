import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateStream from "./createStrems";
import DeleteStream from "./DeleteStreame";
import EditStream from "./editStrems";
import Header from "./header";
import ListStream from "./listStrems";
import ViewStream from "./viewStrems";
import history from "../history";
const App = () => {
  return (
    <div style={{ width: "720px", margin: "10px auto" }}>
      <Router history={history}>
        <Header />
        <hr />
        <Route exact path="/" component={ListStream} />
        <Route path="/streams/create" component={CreateStream} />
        <Route path="/streams/Edit/:id" component={EditStream} />
        <Route path="/streams/view" component={ViewStream} />
        <Route path="/streams/delete/:id" component={DeleteStream} />
      </Router>
    </div>
  );
};
export default App;
