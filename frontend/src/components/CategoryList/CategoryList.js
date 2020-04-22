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
                    <div className="tag-list" key={category.id}>
                        <ListGroup>
                            <ListGroupItem>

                                <Link to={{pathname: `/category/${category.slug}/`}}>
                                    {category.name}
                                </Link>

                            </ListGroupItem>
                            {/*<a href={category.slug}>{category.name}</a>*/}
                        </ListGroup>
                    </div>
                ))}
            </ul>
        );
    }
}


export default CategoryList
