import React, {Component} from "react";
import {Link} from "react-router-dom";
import Tags from "../../containers/Tags/Tags";

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

            <div className="content-list">
                {this.state.posts.map((post) => (
                    <div className="post" id={post.id} key={post.id}>
                        <Link //maintainScrollPosition={false} //console alarm
                            to={{
                                pathname: `/${post.slug}`,
                            }}>
                            <h2>{post.title}</h2>
                        </Link>
                        <div className="post_info">
                            <Link to={{pathname: `category/${post.category.slug}`}}>
                                <span className="cat_name">{post.category.name}</span>
                            </Link>
                            <span>{post.created}</span>
                            <ul className="post_tags">
                                {post.tag.map((t) => (
                                    <li className="tag" key={t.id}>
                                        <Link to={{pathname: `tag/${t.slug}`}}>
                                            #{t.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="tease">{post.tease}</div>
                    </div>
                ))}
            </div>
        );
    }
}

export default PostList;