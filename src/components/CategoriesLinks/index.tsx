import * as React from "react";
import "./style.less";
const Fragment = React.Fragment;

enum CATEGORIES {
    DUPLEX_HOME = "Duplex Home",
    DRAWING_ROOMS = "Drawing Rooms",
    Bed_ROOMS = "Bed Rooms",
    BATH_ROOMS = "Bath Rooms",
    GARDEN_HOME = "Garden Home",
    ANIMATION_DESIGN = "Animation Design"
}
interface IProps {
    onCategoriesSelect?: (value: CATEGORIES) => void;
}
interface IState {
    categories?: CATEGORIES;
}
export default class CategoriesLinks extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
    }

    handleCategories = (cat: CATEGORIES) => {
        this.setState({categories: cat});
        if (this.props.onCategoriesSelect) {
            this.props.onCategoriesSelect(cat);
        }
    }
    render() {
        return (
            <Fragment>
                <span className="categories-title">Categories</span>
                <ul className="categories-list">
                    <li className="categories-item" onClick={() => this.handleCategories(CATEGORIES.DUPLEX_HOME)}>
                        {CATEGORIES.DUPLEX_HOME}
                    </li>
                    <li className="categories-item" onClick={() => this.handleCategories(CATEGORIES.DRAWING_ROOMS)}>
                        {CATEGORIES.DRAWING_ROOMS}
                    </li>
                    <li className="categories-item" onClick={() => this.handleCategories(CATEGORIES.Bed_ROOMS)}>
                        {CATEGORIES.Bed_ROOMS}
                    </li>
                    <li className="categories-item" onClick={() => this.handleCategories(CATEGORIES.BATH_ROOMS)}>
                        {CATEGORIES.BATH_ROOMS}
                    </li>
                    <li className="categories-item" onClick={() => this.handleCategories(CATEGORIES.GARDEN_HOME)}>
                        {CATEGORIES.GARDEN_HOME}
                    </li>
                    <li className="categories-item" onClick={() => this.handleCategories(CATEGORIES.ANIMATION_DESIGN)}>
                        {CATEGORIES.ANIMATION_DESIGN}
                    </li>
                </ul>
            </Fragment>
        );
    }
}