import * as React from "react";
import {Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle} from "reactstrap";
import "./style.less";

interface IProps {
    title?: string;
    author?: string;
    date?: string;
    content?: string;
}
interface IState {
}
export default class PostCard extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Card>
                    <CardImg top width="100%"
                             src="https://placeholdit.imgix.net/~text?txtsize=33&txt=360%C3%97280&w=360&h=280"
                             alt="Card image cap"/>
                    <CardBody>
                        <CardTitle>{this.props.title}</CardTitle>
                        <CardSubtitle>by: {this.props.author}, Date: {this.props.date} </CardSubtitle>
                        <CardText>{this.props.content}</CardText>
                    </CardBody>
                </Card>
            </div>
        );

    }
}
