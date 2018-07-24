import * as React from "react";
import {Redirect, Route, Switch} from "react-router";

import SearchContainer from "./blog";

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
                <Route path={`/index`} component={SearchContainer}/>
                <Redirect to={"/index"}/>
            </Switch>
        );
    }
}
