import * as React from "react";
import "./style.less";
import SidebarPost from "../SidebarPost";
import {LatestPosts} from "./mockApi";

interface IProps {
}
interface IState {
}
export default class SidebarPostList extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={"sidepostlist-wrapper"}>
                <span className="sidebarpost-list-title">Latest Posts</span>
                {
                    LatestPosts.map((item, index) => {
                        return (
                            <SidebarPost
                                key={index}
                                title={item.title}
                                postNumber={item.postNumber}
                                date={item.date} />
                        );
                    })
                }
            </div>
        );
    }
}