import * as React from "react";
import "./style.less";

interface IProps {
}
interface IState {
}

export default class Search extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="search">
                <input className="input-no-style" placeholder="Search..."/>
                <span className={"fas fa-search icon-stick-right"}/>
            </div>
        );
    }
}