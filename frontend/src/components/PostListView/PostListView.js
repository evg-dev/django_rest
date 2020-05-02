import React, {Component} from "react";
import {Link} from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Button from "react-bootstrap/Button";

class PostListView extends Component {

    state = {
        count: "",
        next: "",
        previous: "",
        results: [],
        page: this.props.page
    };

    async loadPosts() {

        let url;
        if (this.props.page) {
            url = `/api/v0/post/?page=${this.props.page}`;
        } else {
            url = "/api/v0/post/";
        }
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState(data)
            });
        console.log(this.props);
    }

    Previous() {
        if (this.state.previous) {
            return (
                <Link to={{pathname: `/page/${this.state.previous}/`}}>
                    <Button>
                        Back
                    </Button>
                </Link>
            );
        } else {
            return (<div></div>);
        }
    }

    Next() {
        if (this.state.next) {
            return (
                <Link to={{pathname: `/page/${this.state.next}/`}}>
                    <Button>
                        Next
                    </Button>
                </Link>
            );
        } else {
            return (<div></div>);
        }
    }

    componentDidMount() {
        this.loadPosts();
    }

    // For all buttons
    componentDidUpdate(prevState) {
        if (prevState.page !== this.props.page) {
            this.setState({page: this.props.page});
            this.loadPosts();
            // Remove focus from button
            document.querySelectorAll('button').forEach(function (node) {
                node.blur();
            });
        }
    }

    render() {
        return (
            <div className="content-list">
                {this.state.results.map((post) => (
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
                <div className="pagination">
                    {this.Previous()}
                    {this.Next()}
                </div>
            </div>
        );
    }
}

export default PostListView;