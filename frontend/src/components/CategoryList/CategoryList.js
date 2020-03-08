import React, {Component} from "react";

class CategoryList extends Component {

    state = {
        categories: []
    };

    async loadCategories() {
        this.setState({
            categories: await fetch("/api/v0/category/").then(response => response.json())
        })

    }

    componentDidMount() {
        this.loadCategories();
    }

    render() {
        return (
            <ul className="content-list">
                {this.state.categories.map((category) => (
                    <div className="tag-list" key={category.id}>
                        <a href={category.slug}>{category.name}</a>
                    </div>
                ))}
            </ul>
        );
    }
}


export default CategoryList
