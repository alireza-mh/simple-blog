import * as React from "react";
import "./style.less";

interface IProps {
    count?: number;
    width?: number;
    height?: number;
}

const handleEllipseNumber = (count, props) => {
    let JSXArray = [];
    let heightVal = props.height ? props.height : 770;
    let widthVal = props.width ? props.width : 770;
    for (let i = 0; i < count; i++) {
        JSXArray.push(
            <div className="ellipse"
                 style={{
                     width: widthVal + "px",
                     height: heightVal + "px",
                     top: `-${heightVal / 2}px`,
                     right: `${-widthVal / 2 + i * (widthVal) / 2 }px`
                 }}>
            </div>
        );
    }
    return JSXArray;
};
const ellipses = (props: IProps) => {
    return (
        <div className="ellipse-container">
            <div className="ellipse-item-container">
                {handleEllipseNumber(props.count ? props.count : 6, props)}
            </div>
        </div>
    );
};

export default ellipses;