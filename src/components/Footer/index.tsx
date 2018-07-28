import * as React from "react";
import Ellipse from "./elllipses";
import {Link} from "react-router-dom";
import Button from "reactstrap/lib/Button";
import "./style.less";

interface IProps {
}

interface IState {
}

export default class Footer extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer-container">
                <Ellipse/>
                <div className="footer-content-wrapper">
                    <span className="footer-title">
                        Subscribe Our Newsletter
                    </span>
                    <span className="footer-subtitle">
                       Donec tempor finibus ante ac luctus. Fusce facilisis nisi vel odio tincidunt maximus. Pellentesque tempus gravida viverra.
                    </span>
                    <div className="footer-subscribe">
                        <input placeholder="Enter Email address"/>
                        <Button >Subscribe</Button>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="copyright">
                        Design by <strong>Golden Layers</strong> | Powered by Wordpress
                    </div>
                    <div className="footer-navigation">
                        <Link to={"#"}>home</Link>
                        <Link to={"#"}>about us</Link>
                        <Link to={"#"}>pages</Link>
                        <Link to={"#"}>gallery</Link>
                        <Link to={"#"}>blog</Link>
                        <Link to={"#"}>contact</Link>
                    </div>
                </div>
            </div>
        );
    }
}