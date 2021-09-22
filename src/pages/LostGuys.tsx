// Copyright (c) 2021 Bin Tsang
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Card, Form, Input, PageHeader } from "antd";
import { ChangeEvent, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import _ from "lodash";
import { useHistory } from "react-router-dom";

const diffGuys = (allGuys: string, currentGuys: string) => {
    const allGuys_ = allGuys
        .trim()
        .split(/[\n\s,，]+/)
        .filter((v) => v !== "");
    const currentGuys_ = currentGuys
        .trim()
        .split(/[\n\s,，]+/)
        .filter((v) => v !== "");
    const lostGuys = _.difference(allGuys_, currentGuys_);
    const extraGuys = _.difference(currentGuys_, allGuys_);
    return [lostGuys, extraGuys];
};

function loadAllGuys(): string {
    const item = localStorage.getItem("allGuys");
    return item === null ? "" : item;
}

function loadCurrentGuys(): string {
    const item = localStorage.getItem("currentGuys");
    return item === null ? "" : item;
}

function saveGuys(allGuys: string, currentGuys: string) {
    localStorage.setItem("allGuys", allGuys);
    localStorage.setItem("currentGuys", currentGuys);
}

function LostGuys() {
    const history = useHistory();
    const [allGuys, setAllGuys] = useState<string>(loadAllGuys);
    const [currentGuys, setCurrentGuys] = useState<string>(loadCurrentGuys);
    const [lostGuys, setLostGuys] = useState<string[]>([]);
    const [extraGuys, setExtraGuys] = useState<string[]>([]);

    useEffect(() => {
        saveGuys(allGuys, currentGuys);

        const [lostGuys_, extraGuys_] = diffGuys(allGuys, currentGuys);
        setLostGuys(lostGuys_);
        setExtraGuys(extraGuys_);
    }, [allGuys, currentGuys]);

    const allGuysChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setAllGuys(e.target.value);
    };

    const currentGuysChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setCurrentGuys(e.target.value);
    };

    return (
        <Card>
            <Helmet>
                <meta charSet="utf-8" />
                <title>走丢的娃</title>
            </Helmet>
            <PageHeader
                className="site-page-header"
                onBack={() => history.push("/tools")}
                title="走丢的娃"
                subTitle="看看哪些娃走丢了~"
            />
            <Form layout="vertical">
                <Form.Item label="所有娃">
                    <Input.TextArea
                        placeholder="所有娃"
                        value={allGuys}
                        onChange={allGuysChange}
                        rows={8}
                    />
                </Form.Item>
                <Form.Item label="在的娃">
                    <Input.TextArea
                        placeholder="在的娃"
                        value={currentGuys}
                        onChange={currentGuysChange}
                        rows={8}
                    />
                </Form.Item>
            </Form>
            <div>
                {lostGuys.length === 0 ? (
                    <h1>棒棒哒~没有娃走丢~</h1>
                ) : (
                    <div>
                        <h1>哦豁，有{lostGuys.length}个娃走丢了：</h1>
                        <p>{lostGuys.join(",")}</p>
                    </div>
                )}
                {extraGuys.length === 0 ? (
                    <h1>棒棒哒~没有娃跑进来捣乱~</h1>
                ) : (
                    <div>
                        <h1>
                            不好，有{extraGuys.length}个娃进来捣乱 &gt;_&lt;
                        </h1>
                        <p>{extraGuys.join(",")}</p>
                    </div>
                )}
            </div>
        </Card>
    );
}

export default LostGuys;
