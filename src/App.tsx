import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonButton, IonContent, IonRouterOutlet, IonSpinner } from "@ionic/react";
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
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import Report from "./pages/Report";
import Stat from "./pages/Stat";
import { getCurrentUser } from './firebase.config'
import { setUserState } from "./redux/actions";
import { useDispatch } from "react-redux";

const RoutingSystem: React.FC = () => {
  return (

    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact />
        <Redirect exact from="/" to="/login" />
        {/* <Route path="/home" component={Home} exact /> */}
        <Route path="/login" component={Login} exact />
        <Route path="/stat" component={Stat} />
        <Route path="/register" component={Register} exact />
        <Route path="/checking" component={CheckList} />
        <Route path="/report" component={Report} />
      </IonRouterOutlet>
    </IonReactRouter>
  )

}

const App: React.FC = () => {
  const dispatch = useDispatch()
  const [busy, setBusy] = useState(true)
  useEffect(() => {
    getCurrentUser().then((user: any) => {
      if (user) {
        dispatch(setUserState(user.email))
        window.history.replaceState({}, '/home', '')
      } else {
        window.history.replaceState({}, '/', '')

      }
      setBusy(false)
    })
  }, [])
  return (
    <IonApp>
      <IonContent>
        {busy ?
          <IonSpinner />
          :
          <RoutingSystem />}
      </IonContent>
    </IonApp>
  )
};

export default App;
