import * as React from "react";
import API from "../../lib/api";
import "./style.less";
import {Col, Row, Container} from "reactstrap";
import Header from "../../components/Header";

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
            <Container>
            </Container>
            </div>
        );
    }
}
