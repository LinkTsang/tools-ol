import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
