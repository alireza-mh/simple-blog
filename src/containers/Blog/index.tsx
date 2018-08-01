import * as React from "react";
import "./style.less";
import Layout from "../Layout";
import PostList from "../../components/PostList";

interface IProps {
}
interface IState {
}

export default class Blog extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Layout pageTitle={"Our Blog"} pageSubTitle={"Home - Blog"}>
                <PostList/>
            </Layout>
        );
    }
}