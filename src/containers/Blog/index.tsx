import * as React from "react";
import API from "../../lib/api";
import "./style.less";
import {Col, Row, Container} from "reactstrap";
import Header from "../../components/Header";
import PostCard from "../../components/PostCard";
import PostList from "../../components/PostList";
import Footer from "../../components/Footer";
import Search from "../../components/Search";
import CategoriesLinks from "../../components/CategoriesLinks";

interface IProps {
}

interface IState {
}

export default class Blog extends React.Component<IProps, IState> {


    constructor(props: IProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <Header title={"Our Blog"} subTitle={"Home - Blog"}/>
                <Container className={"blog-container"}>
                    <Row>
                        <Col md={8}>
                            <PostList/>
                        </Col>
                        <Col md={4}>
                            <Search/>
                            <CategoriesLinks onCategoriesSelect={(val) => {console.log(val)}}/>
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </div>
        );
    }
}
