import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../Home/Home";
import Settings from "../Settings/Settings";
import BuildHistory from "../BuildHistory/BuildHistory";
import Footer from "../Footer/Footer";

import styles from "./App.module.css";

function App() {
  const [settings, setSettings] = useState({
    repository: "",
    command: "",
    branch: "",
    sync: 10,
  });

  return (
    <Router>
      <div className={styles.wrapper}>
        <Switch>
          <Route path="/history">
            <BuildHistory settings={settings} />
          </Route>
          <Route path="/settings">
            <Settings settings={settings} setSettings={setSettings} />
          </Route>
          <Route path="/" exact>
            {settings.repository !== "" ? (
              <BuildHistory settings={settings} />
            ) : (
              <Home />
            )}
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
