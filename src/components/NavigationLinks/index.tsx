import * as React from "react";
import {Link} from "react-router-dom";
import "./style.less";

interface IProps {
}
interface IState {
}

export default class NavigationLink extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navigation-link">
                <Link to={"#"} title={"Home"}>Home</Link>
                <Link to={"#"} title={"About"}>About</Link>
                <Link to={"#"} title={"Screen"}>Screen</Link>
                <Link to={"#"} title={"Contact"}>Contact</Link>
            </div>
        );
    }
}