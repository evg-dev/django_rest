import React, {Component} from "react";
import {ListGroup, ListGroupItem} from "reactstrap";
import {Link} from "react-router-dom";

class TagsListView extends Component {

    state = {
        tags: []
    };

    async loadTags() {
        this.setState({
            tags: await fetch("/api/v0/tag/").then(response => response.json())
        })

    }

    componentDidMount() {
        this.loadTags();
    }

    render() {
        return (
            <ul className="content-list">
                {this.state.tags.map((tag) => (
                    <div className="tag-list" key={tag.id}>
                        <ListGroup>
                            <ListGroupItem>
                                <Link to={{pathname: `/tag/${tag.slug}/`}}>
                                    #{tag.name}
                                </Link>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                ))}
            </ul>
        );
    }
}


export default TagsListView
