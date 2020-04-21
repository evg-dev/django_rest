import React, {Component} from "react";
import {Link} from "react-router-dom";
import {ListGroup, ListGroupItem} from 'reactstrap';


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
                    <ListGroup>
                        <ListGroupItem>
                            <div className="tag-list" key={category.id}>
                                <Link to={{pathname: `/category/${category.slug}/`}}>
                                    {category.name}
                                </Link>
                            </div>
                        </ListGroupItem>
                        {/*<a href={category.slug}>{category.name}</a>*/}
                    </ListGroup>
                ))}
            </ul>
        );
    }
}


export default CategoryList
