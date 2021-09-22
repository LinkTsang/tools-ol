import "antd/dist/antd.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import ToolList from "./pages/ToolList";

function App() {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/tools">
                        <ToolList />
                    </Route>
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
