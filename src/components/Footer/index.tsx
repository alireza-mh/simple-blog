import * as React from "react";
import Ellipse from "./elllipses";
import "./style.less";
import Button from "reactstrap/lib/Button";

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
            </div>
        );
    }
}