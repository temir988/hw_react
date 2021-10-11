import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "../Home/Home";
import Settings from "../Settings/Settings";
import BuildHistory from "../BuildHistory/BuildHistory";
import Footer from "../Footer/Footer";

import styles from "./App.module.css";

function App() {
  const settings = useSelector((state) => state.settings);

  return (
    <Router>
      <div className={styles.wrapper}>
        <Switch>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/" exact>
            {settings.repository !== "" ? <BuildHistory /> : <Home />}
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
