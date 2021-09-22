// Copyright (c) 2021 Bin Tsang
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Card, PageHeader } from "antd";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";

function About() {
    const history = useHistory();
    return (
        <Card>
            <Helmet>
                <meta charSet="utf-8" />
                <title>关于</title>
            </Helmet>
            <PageHeader
                className="site-page-header"
                onBack={() => history.push("/tools")}
                title="关于"
            />
            <p>作者很懒，啥也没写~</p>
        </Card>
    );
}

export default About;
