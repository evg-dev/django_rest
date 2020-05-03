import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Button from "react-bootstrap/Button";
import NoMatchPage from "../../../containers/NoMatchPage/NoMatchPage";

class CategoryView extends Component {

    state = {
        count: "",
        next: "",
        previous: "",
        results: [],
        page_cat: this.props.page_cat,
        category__slug: this.props.category__slug,
        readyToRedirect: false
    };

    async loadPostsByCategory() {
        let url;
        if (this.props.page_cat) {
            url = `/api/v0/category/${this.props.category__slug}/?page=${this.props.page_cat}`;
        } else {
            url = `/api/v0/category/${this.props.category__slug}/`;
        }
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState(data)
            })
            // catch error and redirect to 404 for bad fetch by invalid URL
            .catch(error => {
                // console.log(error);
                this.setState({
                    readyToRedirect: true
                });
            });
    }

    Previous() {
        if (this.state.previous) {
            return (
                <Link to={{pathname: `/category/${this.props.category__slug}/page/${this.state.previous}/`}}>
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
                <Link to={{pathname: `/category/${this.props.category__slug}/page/${this.state.next}/`}}>
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
        this.loadPostsByCategory();
    }

    render() {
        if (this.state.readyToRedirect) {
            return (
                <Redirect to="/404/"/>
            );
        } else {
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
}

export default CategoryView;