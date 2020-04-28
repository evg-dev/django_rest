import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Button from "react-bootstrap/Button";

class TagView extends Component {
    state = {
        count: "",
        next: "",
        previous: "",
        results: [],
        page_tag: this.props.page_tag,
        tag__slug: this.props.tag__slug
    };

    async loadPostsByTag() {
        let url;
        if (this.props.page_tag) {
            url = `/api/v0/tag/${this.props.tag__slug}/?page=${this.props.page_tag}`;
        } else {
            url = `/api/v0/tag/${this.props.tag__slug}/`;
        }
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState(data)
            });
    }

    Previous() {
        if (this.state.previous) {
            return (
                <Link to={{pathname: `/tag/${this.props.tag__slug}/page/${this.state.previous}/`}}>
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
                <Link to={{pathname: `/tag/${this.props.tag__slug}/page/${this.state.next}/`}}>
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
        this.loadPostsByTag();
    }

    render() {
        this.props.history;
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
                {/*{this.state.posts.map((post) => (*/}
                {/*    <div className="post" id={post.id} key={post.id}>*/}
                {/*        <div className="title">*/}
                {/*            <Link //maintainScrollPosition={false} //console alarm*/}
                {/*                to={{*/}
                {/*                    pathname: `/${post.slug}/`,*/}
                {/*                }}>*/}
                {/*                {post.title}*/}
                {/*            </Link>*/}
                {/*        </div>*/}
                {/*        <div className="post_info">*/}
                {/*            <span className="cat_name">Категория:*/}
                {/*                <Link to={{pathname: `/category/${post.category.slug}/`}}>*/}
                {/*                    <span> {post.category.name}</span>*/}
                {/*                </Link>*/}
                {/*            </span>*/}
                {/*            <span>{post.created}</span>*/}
                {/*            <div className="tags_container">*/}
                {/*                <ul className="post_tags">*/}
                {/*                    {post.tag.map((t) => (*/}
                {/*                        <li className="tag" key={t.id}>*/}
                {/*                            <Link to={{pathname: `/tag/${t.slug}/`}}>*/}
                {/*                                #{t.name}*/}
                {/*                            </Link>*/}
                {/*                        </li>*/}
                {/*                    ))}*/}
                {/*                </ul>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <ReactMarkdown className="tease" source={post.tease} escapeHtml={false}/>*/}
                {/*    </div>*/}
                {/*))}*/}
            </div>
        );
    }
}

export default withRouter(TagView);