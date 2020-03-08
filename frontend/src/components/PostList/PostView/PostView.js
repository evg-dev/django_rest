import React, {Component} from "react";
import {BrowserRouter as Router, Link, Route, useParams} from "react-router-dom";
import ReactDOM from "react-dom";
import Post from "../../../containers/Posts/Post/Post";
import getPostSlug from "../../../containers/Posts/Post/getPostSlug";

class PostView extends Component {

    state = {

        id : "",
        title : "",
        tease : "",
        body : "",
        created : "",
        category : "",
        slug : "",
        tag:[] //TODO: List rendering, value instead list url
    };
    async loadPost() {
        fetch(`/api/v0/post/${this.props.post_slug}/`)
            .then(response => response.json())
            .then(data => {
                this.setState(data)
            });
    }

    componentDidMount() {

        this.loadPost();
    }

    render() {
        const { id, title, tease, body, created, category,  slug, tag } = this.state;
        return (
            <div className="content">

                    <div className="post" >
                        <p>{ id }</p>
                        <p>{ title }</p>
                        <p>{ tease }</p>
                        <p>{ body }</p>
                        <p>{ created }</p>
                        <p>{ category }</p>
                        <p>{ slug }</p>
                        <p>{ tag }</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default PostView;