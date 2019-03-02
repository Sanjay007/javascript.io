import React from "react";
import ReactDOM from "react-dom";
import { Card, Col, Row, Form, Icon, Input, Button, Checkbox } from "antd";

import {
  BrowserRouter,
  Router,
  Route,
  Link,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";
import EditPost from "./Components/EditPost";
import Login from "./Components/Login";
import Oauth2Handler from "./Components/Oauth2/Oauth2Handler";
import { PrivateRoute } from "./Components/PrivateRoute";
import "./index.css";
import App from "./App";
import Home from "./Components/Home/Home.js";
import Preview from "./Components/Preview";
import Dashboard from "./Components/Dashboard.js";
import { Provider } from "react-redux";
import { store } from "./Store";
import { history } from "./_helpers";
import registerServiceWorker from "./registerServiceWorker";

function errorLoading(error) {
  console.log(error);
  throw new Error(`Dynamic page loading failed: ${error}`);
}

function loadRoute(cb) {
  return module => cb(null, module.default);
}
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <div>
        <Switch>
          <App history={history}>
            <Route exact path="/" component={Home} />
            <Route path="/oauth2/redirect" component={Oauth2Handler} />
            <Route
              component={({ match }) => (
                <div>
                  <Route path="/edit" component={EditPost} />
                  <Route path="/preview" component={Preview} />
                  <Route path="/profile" component={RouteApp} />
                  <Route path="/:providerId/:title" component={Preview} />
                </div>
              )}
            />
          </App>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

class RouteApp extends React.Component {
  mov = () => {
    this.props.history.push("/preview");
  };
  render() {
    return <a onClick={this.mov}>hii</a>;
  }
}
registerServiceWorker();
