import React, {Component} from "react";
import {BrowserRouter as Router, Link, Route, useParams} from "react-router-dom";
import ReactDOM from "react-dom";
import post from "../../../containers/Posts/Post/Post";

class PostView extends Component {

    state = {

        id: "",
        title: "",
        tease: "",
        body: "",
        created: "",
        category: [],
        slug: "",
        tag: []
    };
    async loadPost() {
        fetch(`/api/v0/post/${this.props.post__slug}/`)
            .then(response => response.json())
            .then(data => {
                this.setState(data)
            });

    }

    componentDidMount() {

        this.loadPost();

    }

    render() {
        const {id, title, tease, body, created, slug} = this.state;
        return (
            <div className="content">
                {/*TODO: value name rendering*/}
                <div className="post">
                    <div>
                        <Link to={{pathname: `category/${this.state.category.slug}`}}>
                            {this.state.category.name}
                        </Link>
                    </div>
                    <p>{id}</p>
                    <p>{title}</p>
                    <p>{tease}</p>
                    <p>{body}</p>
                    <p>{created}</p>
                    <p>{slug}</p>
                    <div>
                        {this.state.tag.map((t) => (
                            <div className="tag_cloud" key={t.id}>
                                <Link to={{pathname: `tag/${t.slug}`}}>
                                    {t.name}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default PostView;