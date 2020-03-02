import React, {Component} from "react";
import {BrowserRouter as Router, Route, useParams} from "react-router-dom";
import ReactDOM from "react-dom";

// import {slug} from "./../../../containers/Posts/Post/Post"
// function PostView() {
//
//     let { slug } = useParams()
//     return slug;
// }
// function getUrl () {
//         let { slug } = useParams();
//         return {slug};
//     }
function s(props) {

    let {slug} = useParams();
    return slug;
}

class PostView extends Component {

    state = {
        post: [],
    };

    async loadPost() {
        // {url} = getUrl();
        console.log(this.props);
        let {slug} = useParams();
        // const {pathname} = this.props.location;
        this.setState({
            post: await fetch(`/api/v0/post/${slug}/`).then(response => response.json())
        })

    }

    componentDidMount() {

        this.loadPost();
    }

    render() {
        return (
            <ul className="content">

                {this.state.post.map((p) => (
                    <div className="post-list" key={p._id}>
                        <h3>{p.title}</h3>
                        <div>{p.tease}</div>
                        <div>{p.body}</div>
                        <div>{p.created}</div>
                        <div>{p.category}</div>
                    </div>
                ))}
            </ul>
        );
    }
}

export default PostView;