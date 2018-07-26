import * as React from "react";
import {Col, Row} from "reactstrap";
import "./style.less";
import PostCard from "../PostCard";

interface IProps {
}
interface IState {
}

export default class PostList extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Row>
                <Col md={6} style={{marginBottom: "80px"}}>
                    <PostCard
                        title={"Some long text that you not expect from a title"}
                        author={"Alireza"}
                        date={"5 Aug 1990"}
                        content={"lorem ipsum this have no meaning and only used for Demo. please dont overlook this. some more text is needed"}/>
                </Col>
                <Col md={6} style={{marginBottom: "80px"}}>
                    <PostCard
                        title={"Title"}
                        author={"Alireza"}
                        date={"5 Aug 1990"}
                        content={"lorem ipsum this have no meaning and only used for Demo. please dont overlook this. some more text is needed"}/>
                </Col>
                <Col md={6} style={{marginBottom: "80px"}}>
                    <PostCard
                        title={"Title"}
                        author={"Alireza"}
                        date={"5 Aug 1990"}
                        content={"lorem ipsum this have no meaning and only used for Demo. please dont overlook this. some more text is needed"}/>
                </Col>
                <Col md={6} style={{marginBottom: "80px"}}>
                    <PostCard
                        title={"Title"}
                        author={"Alireza"}
                        date={"5 Aug 1990"}
                        content={"lorem ipsum this have no meaning and only used for Demo. please dont overlook this. some more text is needed"}/>
                </Col>
            </Row>

        );
    }
}
