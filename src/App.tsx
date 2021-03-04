import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import CheckList from "./pages/CheckList";
import Login from "./pages/Login";
import Register from './pages/Register'
import Home from './pages/Home'

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import Report from "./pages/Report";
import Stat from "./pages/Stat";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/login" component={Login} exact={true} />
        <Redirect exact from="/" to="/login" />
        <Route path="/checking" component={CheckList} />
        <Route path="/register" component={Register} />
        <Route path="/report" component={Report} />
        <Route path="/home" component={Home} />
        <Route path="/stat" component={Stat} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
