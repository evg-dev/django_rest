import React, {Component} from "react";
import {Link} from "react-router-dom";

class CategoryView extends Component {
    state = {
        posts: []
    };

    async loadPostsByCategory() {
        this.setState({
            posts: await fetch(`/api/v0/category/${this.props.category__slug}/`)
                .then(response => response.json())
        });
    }

    componentDidMount() {
        this.loadPostsByCategory();
    }

    render() {
        return (

            <ul className="content-list">
                {this.state.posts.map((post) => (
                    <div className="post-list" key={post.id}>
                        <Link //maintainScrollPosition={false} //console alarm
                            to={{
                                pathname: `/${post.slug}`,
                            }}>
                            {post.title}
                        </Link>
                    </div>
                ))}
            </ul>
        );
    }
}

export default CategoryView;