import * as React from "react";
import {Button as StrapButton} from "reactstrap";
import {ButtonProps} from "reactstrap/lib/Button";
import "./style.less";

interface IProps extends ButtonProps {
}

interface IState {
}

export default class Button extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
    }

    render() {
        const {children, ...rest} = this.props;
        return (
            <div className="primary-custom-btn">
                <StrapButton {...rest as any}>{children}</StrapButton>
            </div>
        );
    }

}