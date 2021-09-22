// Copyright (c) 2021 Bin Tsang
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import LostGuys from "./LostGuys";

import { Layout, Menu } from "antd";

function ToolList() {
    return (
        <Router>
            <Layout className="layout">
                <Layout.Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={["2"]}
                    >
                        <Menu.Item key={0}>
                            <Link to="/tools/lost-guys">走丢的娃</Link>
                        </Menu.Item>
                        <Menu.Item key={-1}>
                            <Link to="/about">关于</Link>
                        </Menu.Item>
                    </Menu>
                </Layout.Header>
                <Layout.Content>
                    <div style={{ height: "100vh" }}>
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/tools/lost-guys">
                                <LostGuys />
                            </Route>
                        </Switch>
                    </div>
                </Layout.Content>
                <Layout.Footer style={{ textAlign: "center" }}>
                    Tools Online ©{new Date().getFullYear()}
                    <span> Created by Link Tsang</span>
                </Layout.Footer>
            </Layout>
        </Router>
    );
}

export default ToolList;
