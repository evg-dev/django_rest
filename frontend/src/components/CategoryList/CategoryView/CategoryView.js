import React, {Component} from "react";
import {Link} from "react-router-dom";
import ReactMarkdown from "react-markdown";

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
            <div className="content-list">
                {this.state.posts.map((post) => (
                    <div className="post" id={post.id} key={post.id}>
                        <div className="title">
                            <Link //maintainScrollPosition={false} //console alarm
                                to={{
                                    pathname: `/${post.slug}/`,
                                }}>
                                {post.title}
                            </Link>
                        </div>
                        <div className="post_info">
                            <span className="cat_name">Категория:
                                <Link to={{pathname: `/category/${post.category.slug}/`}}>
                                    <span> {post.category.name}</span>
                                </Link>
                            </span>
                            <span>{post.created}</span>
                            <div className="tags_container">
                                <ul className="post_tags">
                                    {post.tag.map((t) => (
                                        <li className="tag" key={t.id}>
                                            <Link to={{pathname: `/tag/${t.slug}/`}}>
                                                #{t.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <ReactMarkdown className="tease" source={post.tease} escapeHtml={false}/>
                    </div>
                ))}
            </div>
        );
    }
}

export default CategoryView;