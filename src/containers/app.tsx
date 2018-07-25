import * as React from "react";
import {Redirect, Route, Switch} from "react-router";

import Blog from "./blog";

import "./app.less";


interface IProps {
}

interface IState {
}

export default class AppContainer extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        return (
            <Switch>
                <Route path={`/index`} component={Blog}/>
                <Redirect to={"/index"}/>
            </Switch>
        );
    }
}
