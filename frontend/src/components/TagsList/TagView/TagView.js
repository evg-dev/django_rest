import React, {Component} from "react";
import {Link} from "react-router-dom";

class TagView extends Component {
    state = {
        posts: []
    };

    async loadPostsByTag() {
        this.setState({
            posts: await fetch(`/api/v0/tag/${this.props.tag__slug}/`)
                .then(response => response.json())
        });
    }

    componentDidMount() {
        this.loadPostsByTag();
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

export default TagView;