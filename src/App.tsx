import React from "react";

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

import {
  IonApp,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
  IonMenu,
  IonSplitPane
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router";
import { menuController } from "@ionic/core";

const Page1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Page1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonContent>
          Page1Page1Page1Page1Page1Page1Page1Page1Page1Page1Page1Page1
        </IonContent>
      </IonContent>
    </IonPage>
  );
};
const Page2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Page 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonContent>
          Page2Page2Page2Page2Page2Page2Page2Page2Page2Page2Page2
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

const Page3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Page 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonContent>
          Page3Page3Page3Page3Page3Page3Page3Page3Page3Page3Page3Page3Page3Page3
        </IonContent>
      </IonContent>
    </IonPage>
  );
};
const App: React.FC<any> = () => {
  console.log("App");
  return (
    <IonApp>
      <IonSplitPane when="sm" content-id="main-content">
        <IonMenu side="start" content-id="main-content">
          <IonHeader>
            <IonToolbar color="primary">
              <IonTitle>Start Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonItem
                href="/Page1"
                onClick={async () => {
                  await menuController.close();
                }}
              >
                Page1
              </IonItem>
              <IonItem
                href="/Page2"
                onClick={async () => {
                  await menuController.close();
                }}
              >
                Page2
              </IonItem>
              <IonItem
                href="/Page3"
                onClick={async () => {
                  await menuController.close();
                }}
              >
                Page3
              </IonItem>
            </IonList>
          </IonContent>
        </IonMenu>

        <IonPage id="main-content">
          <IonContent>
            <IonReactRouter>
              <IonRouterOutlet>
                <Route path="/Page1" component={Page1} exact />
                <Route path="/Page2" component={Page2} exact />
                <Route path="/Page3" component={Page3} exact />
              </IonRouterOutlet>
            </IonReactRouter>
          </IonContent>
        </IonPage>
      </IonSplitPane>
    </IonApp>
  );
};

export default App;
