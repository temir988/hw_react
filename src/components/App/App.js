import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "../Home/Home";
import Settings from "../Settings/Settings";
import BuildHistory from "../BuildHistory/BuildHistory";
import Footer from "../Footer/Footer";

import styles from "./App.module.css";

function App() {
  return (
    <Router>
      <div className={styles.wrapper}>
        <main className={styles.main}>
          <Switch>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/history">
              <BuildHistory />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
