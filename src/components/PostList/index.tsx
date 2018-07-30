import * as React from "react";
import {Col, Row} from "reactstrap";
import "./style.less";
import PostCard from "../PostCard";
import {PostListMock} from "./mockApi";

interface IProps {
}

interface IState {
}

export default class PostList extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
    }

    handlePage = () => {
        let viewArray = [];
        for (let i = 0 ; i < PostListMock.paginationCount ; i++) {
            let item = PostListMock.list[i];
            viewArray.push(<Col md={6} style={{marginBottom: "80px"}}>
                <PostCard
                    key={item.id}
                    title={item.title}
                    author={item.author}
                    date={item.date}
                    content={item.content}/>
            </Col>);
        }
        return viewArray;
    }
    render() {
        return (
            <Row>
                {this.handlePage()}
            </Row>

        );
    }
}
