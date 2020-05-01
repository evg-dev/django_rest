import React, {Component} from "react";
import {Link} from "react-router-dom";
import {ListGroup, ListGroupItem} from 'reactstrap';
import {forEach} from "react-bootstrap/cjs/ElementChildren";


class CategoryListView extends Component {

    state = {
        categories: []
    };

    async loadCategories() {
        this.setState({
            categories: await fetch("/api/v0/category/").then(response => response.json())
        });
    }

    getChild(id) {
        return (
            <div>
                {this.state.categories
                    .filter(category => category.parent_id_id === id)
                    .map((category) => (
                        <div className="tag-list-child" key={category.id}>
                            <ListGroup>
                                <ListGroupItem>
                                    <Link to={{pathname: `/category/${category.slug}/`}}>
                                        {category.name}
                                    </Link>
                                </ListGroupItem>
                            </ListGroup>
                            <div>
                                <div>
                                    {this.getChild(category.id)}
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        )
    }

    componentDidMount() {
        this.loadCategories();
    }

    render() {
        return (
            <ul className="content-list">
                {this.state.categories
                    .filter(category => category.parent_id_id == null)
                    .map((category) => (
                        <div className="tag-list" key={category.id}>
                            <ListGroup>
                                <ListGroupItem>
                                    <Link to={{pathname: `/category/${category.slug}/`}}>
                                        {category.name}
                                    </Link>
                                </ListGroupItem>
                            </ListGroup>
                            <div>
                                {this.getChild(category.id)}
                            </div>

                        </div>
                ))}
            </ul>
        );
    }
}


export default CategoryListView
