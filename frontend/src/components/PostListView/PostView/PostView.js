import React, {Component} from "react";
import {BrowserRouter as Router, Link, Route, useParams, Redirect} from "react-router-dom";
import ReactMarkdown from "react-markdown";
import NoMatchPage from "../../../containers/NoMatchPage/NoMatchPage";

class PostView extends Component {

    state = {
        id: "",
        title: "",
        tease: "",
        body: "",
        created: "",
        category: [],
        slug: "",
        tag: [],
        readyToRedirect: false
    };
    async loadPost() {
        fetch(`/api/v0/post/${this.props.post__slug}/`)
            .then(response => response.json())
            .then(data => {
                this.setState(data)
            })
            .catch(error => {
                // console.log(error);
                this.setState({
                    readyToRedirect: true
                });
            });
    }

    componentDidMount() {
        this.loadPost();
    }

    render() {
        const {id, title, tease, body, created, slug} = this.state;
        if (this.state.readyToRedirect) {
            return (
                <Redirect to="/404/"/>
            );
        } else {
            return (
                <div className="content-list">
                    <div className="post" id={id}>
                        <div className="title">
                            <Link className="title"//maintainScrollPosition={false} //console alarm
                                  to={{
                                      pathname: `/${slug}/`,
                                  }}>
                                {title}
                            </Link>
                        </div>
                        <div className="post_info">
                                <span className="cat_name">Категория:
                                    <Link to={{pathname: `/category/${this.state.category.slug}/`}}>
                                        <span> {this.state.category.name}</span>
                                    </Link>
                                </span>
                            <span>{created}</span>
                            <div className="tags_container">
                                <ul className="post_tags">
                                    {this.state.tag.map((t) => (
                                        <li className="tag" key={t.id}>
                                            <Link to={{pathname: `/tag/${t.slug}/`}}>
                                                #{t.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <ReactMarkdown className="tease" source={tease} escapeHtml={false}/>
                        <ReactMarkdown className="body" source={body} escapeHtml={false}/>
                    </div>
                </div>
            );
        }
    }
}

export default PostView;