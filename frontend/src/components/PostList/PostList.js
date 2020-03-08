import React, {Component} from "react";
import {Link} from "react-router-dom";

class PostList extends Component {

    state = {
        posts: []
    };

    async loadPosts() {
        this.setState({
            posts: await fetch("/api/v0/post/").then(response => response.json())
        });
    }

    componentDidMount() {
        this.loadPosts();
    }

    render() {
        return (

            <ul className="content-list">
                {this.state.posts.map((post) => (
                    <div className="post-list" key={post.id}>
                        <Link //maintainScrollPosition={false} //console alarm
                              to={{
                            pathname: `/${post.slug}`,
                            // state: {romDashboard: true}
                        }}>
                            {post.title}
                        </Link>
                    </div>
                ))}
            </ul>
        );
    }
}

export default PostList;