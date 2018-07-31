import * as React from "react";
import "./style.less";

interface IProps {
    title?: string;
    postNumber?: number;
    date?: string;       // TODO change to DATE type later
}
interface IState {
}
 export default class SidebarPost extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={"sidepost-wrapper"}>
                <img     src="https://placeholdit.imgix.net/~text?txtsize=33&txt=72%C3%9772&w=72&h=72"
                         alt="sidepost"/>
                <div className={"sidepost-content"}>
                    <h5 className={"d-block"}>{this.props.title}</h5>
                    <span className={"post-date"}>{`Post ${this.props.postNumber} ${this.props.date}`}</span>
                </div>
            </div>
        );
    }
 }