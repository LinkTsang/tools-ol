import "antd/dist/antd.css";
import "./App.css";

import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import About from "./pages/About";
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
                        <Redirect to="/tools" />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
