import * as React from "react";
import {Row} from "reactstrap";

const Logo = require("../../assets/images/Logo.png");
import "./style.less";
import NavigationLink from "../NavigationLinks";
import Button from "../Button";

interface IProps {
    title?: string;
    subTitle?: string;
}

interface IState {
}

export default class Header extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row className={"header"}>
                <div className="header-top-container">
                    <div className="nav-wrapper">
                        <div className="logo">
                            <img src={Logo}/>
                        </div>
                        <div className={"navigation"}>
                            <NavigationLink/>
                            <Button>Create Account</Button>
                        </div>
                    </div>
                    <div className={"header-wrapper"}>
                        <span className={"text-title"}>{this.props.title}</span>
                        <span className={"sub-title-text mt-10"}>{this.props.subTitle}</span>
                    </div>
                </div>
            </Row>
        );
    }
}
